// Keep existing community records during the transition.
const origin = 'https://lanka-live-network.cfp5cnn2pq.chatgpt.site';
export default {async rewrites(){return [
{source:'/api/community',destination:origin+'/api/community'},
{source:'/api/image',destination:origin+'/api/image'}
];}};
