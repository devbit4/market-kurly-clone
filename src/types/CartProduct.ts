export interface CartProduct {
	no: number;
	storageType: string;
	name: string;
	short_description: string;
	list_image_url: string;
	sales_price: number;
	discounted_price: number;
	discount_rate: number;
	is_multiple_price: boolean;
	is_buy_now: boolean;
	is_purchase_status: boolean;
	is_giftable: boolean;
	is_only_adult: boolean;
	is_shown: boolean;
	is_sold_out: boolean;
	sold_out_title: string;
	sold_out_text: string;
	can_restock_notify: boolean;
	product_view_status: string;
	not_purchase_message: string;
	delivery_type_names: string[];
	tags: Tags[];
	sticker: Sticker | null;
	group_product: {
		is_group: boolean;
		is_not_representative: boolean;
	};
	review_count: string;
}

export interface CartProductInfo extends CartProduct {
	quantity: number;
	isChecked: boolean;
}

export interface CartItems {
	dealProductNo: number;
	quantity: number;
}

export interface CartPriceInfo {
	price: number;
	discountPrice: number;
	deliveryFee: number;
	totalPrice: number;
}

interface Tags {
	name: string;
	type: string;
}

interface Sticker {
	content: StickerContent[];
	opacity: number;
	background_color: string;
}

interface StickerContent {
	text: string;
	weight: string;
}
