Nova.booting((Vue, router) => {
    Vue.component('cloudflare-cache-purge', require('./components/CloudFlareCachePurge'));
    Vue.component('nova-cloudflare-card', require('./components/NovaCloudFlareCard'));
})