<?php

namespace Zoxta\NovaCloudflareCard\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Zoxta\NovaCloudflareCard\CloudflareHelper;

class CloudflareController extends Controller
{
    public function cachePurge(Request $request)
    {
        # check if any of the credentials is not set
        if (
            empty(config('services.cloudflare.zone_id'))
                or (empty(config('services.cloudflare.key')) and empty(config('services.cloudflare.bearer')))
                    or empty(config('services.cloudflare.email'))
        ) {
            return response()->json([
                'success' => false,
                'message' => 'One of Cloudflare credentials (zone id, email or key/bearer) is not set in services.php'
            ]);
        }

        $result = CloudflareHelper::cachePurge();

        return response()->json([
            'success' => $result,
        ]);
    }
}
