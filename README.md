# Laravel Nova CloudFlare Card

[![Latest Version on Packagist](https://img.shields.io/packagist/v/zoxta/nova-cloudflare-card.svg?style=flat-square)](https://packagist.org/packages/zoxta/nova-cloudflare-card)
[![Total Downloads](https://img.shields.io/packagist/dt/zoxta/nova-cloudflare-card.svg?style=flat-square)](https://packagist.org/packages/zoxta/nova-cloudflare-card)

Purge your CloudFlare's cache in two clicks from a Laravel Nova dashboard card.

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

You need to add your Cloudflare's credentials to`config/services.php` file as shown:

```php

    'cloudflare' => [
        'email'   => env('CLOUDFLARE_EMAIL', ''), # your cloudflare email
        'key'     => env('CLOUDFLARE_KEY', ''), # your cloudflare api key, from https://dash.cloudflare.com/profile
        'zone_id' => env('CLOUDFLARE_ZONE_ID', ''), # your domain's zone id, from the domain overview page
    ],

```

## Usage

A new card will appear on your dashboard giving you the option to purge your Cloudflare's cache in two clicks whenever you need.


## Credits

- [zOxta](https://github.com/zOxta)

## License

This card is released under the MIT License (MIT). Please see the included [license file](LICENSE.md) for more information.
