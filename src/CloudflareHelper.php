<?php

namespace Zoxta\NovaCloudflareCard;

use Zttp\Zttp;

class CloudflareHelper
{
    public static function cachePurge()
    {
        $zone_id = config('services.cloudflare.zone_id');
        
        $response = Zttp::withHeaders([
            'X-Auth-Key' => config('services.cloudflare.key'),
            'X-Auth-Email' => config('services.cloudflare.email'),
        ])
        ->delete("https://api.cloudflare.com/client/v4/zones/{$zone_id}/purge_cache", ['purge_everything' => true]);

        return $response->json()['success'] ?? false;
    }
}
