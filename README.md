# Laravel Nova Cloudflare Card

[![Latest Version on Packagist](https://img.shields.io/packagist/v/zOxta/nova-cloudflare-card.svg?style=flat-square)](https://packagist.org/packages/zoxta/nova-cloudflare-card)
[![Total Downloads](https://img.shields.io/packagist/dt/zOxta/nova-cloudflare-card.svg?style=flat-square)](https://packagist.org/packages/zoxta/nova-cloudflare-card)

Purge your Cloudflare's cache in two clicks from a Laravel Nova dashboard card.

![nova-cloudflare-card](https://user-images.githubusercontent.com/2760582/44584363-08938f80-a7a9-11e8-92a7-99497f5bcda5.png)


## Installation

You can install the package in to a Laravel app that uses [Laravel Nova](https://nova.laravel.com) via composer:

```bash
composer require zoxta/nova-cloudflare-card
```

Once the package is installed, you need to add the card to your `NovaServiceProvider.php` file:

```php
// in app/Providers/NovaServiceProvder.php

// ...

public function cards()
{
    return [
        // ...
        new \Zoxta\NovaCloudflareCard\NovaCloudflareCard(),
    ];
}
```

## Config

You need to add your Cloudflare's credentials to `config/services.php` file as shown:

```php

    'cloudflare' => [
        'email'   => env('CLOUDFLARE_EMAIL', ''), # your cloudflare email
        'key'     => env('CLOUDFLARE_KEY', ''), # your cloudflare api key, from https://dash.cloudflare.com/profile
        'zone_id' => env('CLOUDFLARE_ZONE_ID', ''), # your domain's zone id, from the domain overview page
        'bearer' => env('CLOUDFLARE_BEARER', false), # if present use Authorization Bearer token instead of X-Auth-Key Header, use X-Auth if acc token, and Bearer if scoped token
    ],

```

![nova-cloudflare-card-config](https://user-images.githubusercontent.com/2760582/44584370-0c271680-a7a9-11e8-89ed-74ec4a0d233a.png)
When creating an API key/token if you decide to use the account's Global API Key, you need to set the `CLOUDFLARE_KEY` env variable, but if you decide to use an API Token, which you can scope to specific zones, you need to set the `CLOUDFLARE_BEARER` env variable

## Usage

A new card will appear on your dashboard giving you the option to purge your Cloudflare's cache in two clicks whenever you need.


## Credits

- [zOxta](https://github.com/zOxta)

## License

This card is released under the MIT License (MIT). Please see the included [license file](LICENSE.md) for more information.
