<template>
    <modal @modal-close="handleClose">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden" style="max-width: 600px">
            <div class="p-8">
                <heading :level="2" class="mb-6">{{__("Purge Cloudflare's Cache")}}</heading>
                <p class="text-80">{{__('This will clear ALL cached files on Cloudflare to force Cloudflare to fetch a fresh version of those files from your web server.')}}</p>
                <br>
                <p class="text-80">{{ __("Usually needed to bust Cloudflare's cache when you are actively updating cached resources.") }}</p>
            </div>

            <div class="bg-30 px-6 py-3 flex">
                <div class="ml-auto">
                    <button type="button" data-testid="cancel-button" @click.prevent="handleClose" class="btn text-80 font-normal h-9 px-3 mr-3 btn-link">{{__('Cancel')}}</button>
                    <button ref="confirmButton" data-testid="confirm-button" @click.prevent="handleConfirm" class="btn btn-default btn-danger">{{__('Purge Everything')}}</button>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
    export default {
        methods: {
            handleClose() {
                this.$emit('close')
            },

            handleConfirm() {
                this.$emit('confirm')
            },
        },
    }
</script>
