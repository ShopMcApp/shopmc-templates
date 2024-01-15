interface Discount {
    code: string
    percent_off: number
    products: Array<string>
}

interface Voucher {
    code: string
    quantity: number
    product: string
}

interface Order {
    product: string
    quantity: number
    price: number
    currency: string
    nick: string
    method: 'stripe' |
    'paybylink_transfer' | 'paybylink_sms' |
    'microsms_transfer' | 'microsms_sms' |
    'hotpay_psc' | 'hotpay_transfer' |
    'cashbill' |
    'paypal' |
    'icehost' |
    'chunkserve'
    timestamp: number
    approved?: boolean
    customer?: string
}

interface Product {
    icon: string
    name: string
    description?: string
    price: number
    server: string
    commands: string
    adjustable: boolean
    sms?: boolean
    sms_number?: number
    id: string
}

interface Server {
    id: string
    name: string
    ip: string
    icon: string
    commands: boolean
}

interface Shop {
    // general
    baseURL: string
    customer: string
    currency: string
    type: string
    name?: string
    description?: string
    template?: string
    icon?: string

    // lists
    products: Array<Product>
    servers: Array<Server>
    orders: Array<Order>
    discounts: Array<Discount>
    vouchers: Array<Voucher>

    // paybylink
    paybylink_userid?: string
    paybylink_transfer?: boolean
    paybylink_transfer_hash?: string
    paybylink_transfer_shopid?: number
    paybylink_sms?: boolean
    paybylink_sms_serviceid?: number
    paybylink_sms_text?: string
    paybylink_paysafecard?: boolean
    paybylink_paysafecard_shopid?: number
    paybylink_paysafecard_hash?: string

    // hotpay
    hotpay_psc?: boolean
    hotpay_psc_secret?: number
    hotpay_psc_password?: string
    hotpay_transfer?: boolean
    hotpay_transfer_secret?: number
    hotpay_transfer_password?: string

    // microsms
    microsms_userid?: string
    microsms_transfer?: boolean
    microsms_transfer_hash?: string
    microsms_transfer_shopid?: number
    microsms_sms?: boolean
    microsms_sms_serviceid?: number
    microsms_sms_text?: string

    // cashbill
    cashbill_userid?: string
    cashbill_secret?: string

    // paypal
    paypal_clientid?: string
    paypal_secret?: string

    // icehost
    icehost_key?: string

    // chunkserve
    chunkserve_key?: string

    // social
    discord?: boolean
    discord_url?: string
    facebook?: boolean
    facebook_url?: string
    tiktok?: boolean
    tiktok_url?: string

    // webhook
    webhook_discord?: boolean
    webhook_discord_url?: string
}