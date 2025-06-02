export const projects = [
  {
    slug: 'mtgrpc',
    title: 'Multi-Threaded gRPC Server',
    componentPath: '@/views/projects/MtGrpc.vue',
  },
  {
    slug: 'cpu',
    title: 'MIPS Simulator',
    componentPath: '@/views/projects/CPU.vue',
    image: new URL('@/assets/images/SMPCache.png', import.meta.url).href,
  },
  {
    slug: 'caching-proxy',
    title: 'Caching Proxy',
    componentPath: '@/views/projects/CachingProxy.vue',
  },
]
