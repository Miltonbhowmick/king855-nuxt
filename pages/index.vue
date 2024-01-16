<template>
    <div class="home-page">
        <div class="slider-box">
            <carousel
                :perPage="1"
                :navigationEnabled="false"
                :paginationEnabled="false"
                :loop="true"
                :autoplay="true"
            >
                <slide class="cs-slide">
                    <div class="banner">
                        <img
                            src="/images/slide/banner1_en.jpg"
                            alt="banner1_en"
                        />
                    </div>
                </slide>
                <slide class="cs-slide">
                    <div class="banner">
                        <img
                            src="/images/slide/banner2_en.jpg"
                            alt="banner1_en"
                        />
                    </div>
                </slide>
                <slide class="cs-slide">
                    <div class="banner">
                        <img
                            src="/images/slide/banner3_en.jpg"
                            alt="banner1_en"
                        />
                    </div>
                </slide>
            </carousel>
        </div>
        <div class="game-content-list">
            <div class="category-list">
                <div class="item active">
                    <div class="image">
                        <img src="/images/tab-icon-1.png" />
                    </div>
                    <a class="name">Casino</a>
                </div>
                <div class="item">
                    <div class="image">
                        <img src="/images/tab-icon-1.png" />
                    </div>
                    <a class="name">Casino</a>
                </div>
            </div>
            <div class="data-list">
                <div class="supplier-list">
                    <h2 class="title">Supplier</h2>
                    <div class="items">
                        <div
                            v-for="(
                                supplierItem, supplierId
                            ) in supplierItemList"
                            :key="'supplier_' + supplierId"
                            class="item"
                        >
                            <div class="bg-image">
                                <img
                                    :src="supplierItem.imageSrc"
                                    :alt="supplierItem.brandName"
                                />
                            </div>
                            <div class="content">
                                <em class="brand-name">{{
                                    supplierItem.brandName
                                }}</em
                                ><a class="join-btn">join</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hot-list">
                    <h3 class="title">Hot</h3>
                    <div class="hot-items">
                        <div
                            v-for="(hotItem, hotId) in hotItemList"
                            :key="'hot_' + hotId"
                            class="item"
                        >
                            <div class="image">
                                <img
                                    :src="hotItem.imageSrc"
                                    :alt="'image_' + hotItem.name"
                                />
                            </div>
                            <em class="hot-name">{{ hotItem.name }} </em>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
let hotItemList = [
    {
        imageSrc: "/images/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
    {
        imageSrc: "/images/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
    {
        imageSrc: "/images/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
    {
        imageSrc: "/images/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
    {
        imageSrc: "/images/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
    {
        imageSrc: "/images/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
    {
        imageSrc: "/images/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
    {
        imageSrc: "/images/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
    {
        imageSrc: "/images/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
];

let supplierItemList = [
    {
        imageSrc: "/images/supplier-102.png",
        brandName: "CT Live",
    },
    {
        imageSrc: "/images/supplier-102.png",
        brandName: "BG Live",
    },
    {
        imageSrc: "/images/supplier-102.png",
        brandName: "BG Live",
    },
    {
        imageSrc: "/images/supplier-102.png",
        brandName: "BG Live",
    },
    {
        imageSrc: "/images/supplier-102.png",
        brandName: "BG Live",
    },
];
</script>

<style scoped lang="scss">
.game-content-list {
    box-sizing: border-box;
    padding: 10px 10%;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
    .category-list {
        padding: 10px;
        background: rgb(29 30 56 / 50%);
        border-radius: 5px;
        border: 1px solid #393657;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .item {
            border: 1px solid rgb(59, 55, 90);
            background: linear-gradient(0deg, #2f2b4f 0%, #201e3a 100%);
            width: 80px;
            height: 90px;
            border-radius: 6px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            &.active {
                background: linear-gradient(0deg, #27478e 0%, #3f3c6f 100%);
            }
        }
    }
    .data-list {
        width: 100%;
        padding: 10px;
        background: rgb(29 30 56 / 50%);
        border-radius: 5px;
        border: 1px solid #393657;
        display: flex;
        flex-direction: column;
        .supplier-list {
            .title {
                padding-left: 10px;
                color: #fff;
                margin: 10px 0;
                border-left: 4px solid #5bb2f6;
                font-size: 0.925rem;
                font-weight: 300;
            }
            .items {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                gap: 5px 8px;
                .item {
                    width: 24.3%;
                    position: relative;
                    .bg-image {
                        border-radius: 10px;
                        overflow: hidden;
                    }
                    .content {
                        position: absolute;
                        right: 10%;
                        bottom: 8px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        .brand-name {
                            margin: 16px 0;
                            font-size: 22px;
                            font-style: normal;
                        }
                        .join-btn {
                            padding: 10px 45px;
                            border-radius: 20px;
                            background: linear-gradient(
                                0deg,
                                #ef8f27 0%,
                                #f5bc5e 100%
                            );
                            cursor: pointer;
                            font-size: 0.88rem;
                            &:hover {
                                background: linear-gradient(
                                    0deg,
                                    #dc0c51 0%,
                                    #ff8282 100%
                                );
                            }
                        }
                    }
                }
            }
        }
        .hot-list {
            .title {
                padding-left: 10px;
                color: #fff;
                margin: 10px 0;
                border-left: 4px solid #5bb2f6;
                font-size: 0.925rem;
                font-weight: 300;
            }
            .hot-items {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                gap: 0.8%;
                .item {
                    width: 16%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .image {
                        border-radius: 10px;
                        overflow: hidden;
                    }
                    .hot-name {
                        font-size: 16px;
                        margin: 5px 0;
                        font-style: normal;
                    }
                }
            }
        }
    }
}
</style>
