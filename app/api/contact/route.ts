const recipient='post@gtoenter.no';
function config(){const e=process.env;return {key:e.RESEND_API_KEY,from:e.CONTACT_FROM_EMAIL};}
export function GET(){const {key,from}=config();return Response.json({configured:Boolean(key&&from)});}
export async function POST(req:Request){
 if(req.headers.get('origin')!==new URL(req.url).origin)return Response.json({error:'Invalid request.'},{status:403});
 if(Number(req.headers.get('content-length')||0)>16000)return Response.json({error:'Message too long.'},{status:413});
 try{
 const f=await req.formData();const value=(k:string)=>String(f.get(k)||'').trim();
 if(value('website'))return Response.json({error:'Invalid request.'},{status:400});
 const name=value('name'),email=value('email'),phone=value('phone'),title=value('title'),body=value('body');
 if(!name||name.length>100||!/^\S+@\S+\.\S+$/.test(email)||email.length>200||phone.length>60||!title||title.length>180||!body||body.length>5000)return Response.json({error:'Please check the required fields.'},{status:400});
 const {key,from}=config();if(!key||!from)return Response.json({error:'Direct sending is not available yet. Please use your email app.'},{status:503});
 const result=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:[recipient],reply_to:email,subject:`Lanka Live: ${title.replace(/[\r\n]/g,' ')}`,text:`Name: ${name}\nEmail: ${email}\nPhone: ${phone||'—'}\n\n${body}`})});
 if(!result.ok)return Response.json({error:'Could not send. Please try again or email us.'},{status:502});
 return Response.json({ok:true});
 }catch{return Response.json({error:'Could not send. Please try again.'},{status:500});}
}
