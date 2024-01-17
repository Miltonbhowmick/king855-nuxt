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
        <div class="mobile-slider-box">
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
                            src="/images/mobile-slide/banner1_en.jpg"
                            alt="banner1_en"
                        />
                    </div>
                </slide>
                <slide class="cs-slide">
                    <div class="banner">
                        <img
                            src="/images/mobile-slide/banner2_en.jpg"
                            alt="banner1_en"
                        />
                    </div>
                </slide>
                <slide class="cs-slide">
                    <div class="banner">
                        <img
                            src="/images/mobile-slide/banner3_en.jpg"
                            alt="banner1_en"
                        />
                    </div>
                </slide>
            </carousel>
        </div>
        <div class="mobile-login-header">
            <div class="news-box">
                <div class="notice-arrow">
                    <i class="fa fa-volume-up" aria-hidden="true"></i>
                </div>
                <marquee class="marquee" direction="left" scrollamount="4">
                    <span class="notice-text"
                        >KING855 网上博彩 有你才精彩 KING855 打开富贵门</span
                    ></marquee
                >
            </div>
            <div class="buttons">
                <a @click="showLoginModal = true" class="btn login-btn"
                    >Login</a
                >
                <a class="btn free-btn">Free</a>
            </div>
        </div>
        <div class="mobile-game-content-list">
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
                <div class="item">
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
                        <carousel
                            :per-page="1"
                            :navigationEnabled="true"
                            :paginationEnabled="false"
                        >
                            <slide
                                v-for="(
                                    supplierItem, supplierId
                                ) in supplierItemList"
                                :key="'supplier_' + supplierId"
                            >
                                <div class="item">
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
                            </slide>
                        </carousel>
                    </div>
                </div>
                <div class="hot-list">
                    <h3 class="title">Hot</h3>
                    <div class="hot-items">
                        <div
                            v-for="(hotItem, hotId) in mobileHotItemList"
                            :key="'hot_' + hotId"
                            class="item"
                        >
                            <div class="content">
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
                            <div class="content">
                                <div class="image">
                                    <img
                                        :src="hotItem.imageSrc"
                                        :alt="'image_' + hotItem.name"
                                    />
                                </div>
                                <div class="overlay-content">
                                    <a class="join-btn">join</a>
                                </div>
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
let mobileHotItemList = [
    {
        imageSrc: "/images/mobile-hot-list/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
    {
        imageSrc: "/images/mobile-hot-list/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
    {
        imageSrc: "/images/mobile-hot-list/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
    {
        imageSrc: "/images/mobile-hot-list/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
    {
        imageSrc: "/images/mobile-hot-list/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
    {
        imageSrc: "/images/mobile-hot-list/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
    {
        imageSrc: "/images/mobile-hot-list/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
    {
        imageSrc: "/images/mobile-hot-list/hot-102-20101.png",
        name: "Rapid Baccarat",
    },
    {
        imageSrc: "/images/mobile-hot-list/hot-102-20101.png",
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
.slider-box {
    @media (max-width: 768px) {
        display: none;
    }
}
.mobile-slider-box {
    display: none;
    @media (max-width: 768px) {
        display: block;
        padding: 0 1.1rem;
        .cs-slide {
            .banner {
                height: 290px;
                border-radius: 25px;
                overflow: hidden;
                img {
                    border-radius: 25px;
                }
            }
        }
    }
}
.mobile-login-header {
    display: none;
    @media (max-width: 768px) {
        display: block;
        margin: 1.1rem;
        border-radius: 25px;
        background: #1a1a1a;
        border: 1px solid #393657;
        padding: 1.1rem;
        .news-box {
            padding: 18px 0;
            display: flex;
            align-items: center;
            height: 100%;
            .notice-arrow {
                width: 3.9rem;
                line-height: 0.68rem;
                padding-left: 0.2rem;
                font-size: 1.8rem;
                color: #0890fc;
            }
            .marquee {
                .notice-text {
                    font-size: 22px;
                }
            }
        }
        .buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            .btn {
                width: 50%;
                padding: 15px 0;
                font-size: 1.64rem;
                color: #fff;
                text-align: center;
                border-radius: 8px;
                &.login-btn {
                    background: linear-gradient(0deg, #27478e 0%, #3f3c6f 100%);
                    border: 1px solid #5a567f;
                }
                &.free-btn {
                    background: #ff003b;
                    color: #fff;
                    border: none;
                }
            }
        }
    }
}
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
                        bottom: 15%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        .brand-name {
                            margin: 16px 0;
                            font-size: 20px;
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
                            text-align: center;
                            text-transform: capitalize;
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
                    .content {
                        position: relative;
                        &:hover {
                            .overlay-content {
                                position: absolute;
                                top: 0;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                background: rgb(0, 0, 0, 0.7);
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                            }
                        }
                        .image {
                            border-radius: 10px;
                            overflow: hidden;
                        }

                        .overlay-content {
                            display: none;

                            .join-btn {
                                display: block;
                                width: 70%;
                                padding: 6px 0;
                                border-radius: 15px;
                                background: linear-gradient(
                                    0deg,
                                    #ef8f27 0%,
                                    #f5bc5e 100%
                                );
                                text-align: center;
                                text-transform: capitalize;
                                cursor: pointer;
                                font-size: 0.88rem;
                            }
                        }
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
    @media (max-width: 768px) {
        display: none;
    }
}

.mobile-game-content-list {
    display: none;
    @media (max-width: 768px) {
        padding: 0 1.1rem 20px 1.1rem;
        display: flex;
        gap: 15px;
        .category-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
            .item {
                padding: 1.067vw 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 5px;
                width: 7rem;
                height: 13vw;
                color: #fff;
                text-align: center;
                font-size: 3.2vw;
                overflow: hidden;
                background: linear-gradient(0deg, #2f2b4f 0%, #201e3a 100%);
                margin-bottom: 0.2rem;
                border-radius: 27px;
                border: 1px solid #5a567f;
                &.active {
                    background: linear-gradient(0deg, #27478e 0%, #3f3c6f 100%);
                    box-shadow: 0 1px #5bb2f6;
                }
                @media (max-width: 576px) {
                    height: 18vw;
                }
                @media (max-width: 431px) {
                    height: 25vw;
                }
            }
        }
        .data-list {
            .supplier-list {
                .title {
                    font-size: 3.2vw;
                    font-weight: 300;
                    padding-left: 0.5rem;
                    color: #fff;
                    border-left: 3px solid #5bb2f6;
                }
                .items {
                    // display: flex;
                    // flex-wrap: wrap;
                    // justify-content: flex-start;
                    // gap: 5px 8px;
                    // max-width: 300px;
                    // overflow-x: auto;
                    .item {
                        width: max-content;
                        position: relative;
                        .bg-image {
                            width: 450px;
                            border-radius: 10px;
                            overflow: hidden;
                        }
                        .content {
                            position: absolute;
                            right: 5%;
                            top: 50%;
                            transform: translateY(-50%);
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            gap: 10px;
                            .brand-name {
                                font-style: normal;
                                font-size: 30px;
                                font-weight: 400;
                                color: #fff;
                            }
                            .join-btn {
                                padding: 10px 45px;
                                border-radius: 50px;

                                text-align: center;
                                text-transform: capitalize;
                                cursor: pointer;
                                font-size: 30px;
                                font-weight: 400;
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
            .hot-list {
                .title {
                    font-size: 3.2vw;
                    font-weight: 300;
                    padding-left: 0.5rem;
                    color: #fff;
                    border-left: 3px solid #5bb2f6;
                }
                .hot-items {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    gap: 13px 2.2%;
                    .item {
                        width: 31.6%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        .content {
                            display: flex;
                            flex-direction: column;
                            .image {
                                border-radius: 10px;
                                overflow: hidden;
                            }
                            .hot-name {
                                font-size: 25px;
                                font-style: normal;
                                color: #fff;
                            }
                        }

                        @media (max-width: 576px) {
                            width: 48%;
                        }
                        @media (max-width: 431px) {
                            width: 100%;
                        }
                    }
                }
            }
            @media (max-width: 576px) {
                margin-top: 30px;
            }
        }
    }
}

:deep(.VueCarousel-slide) {
    width: 30px;
}
:deep(.VueCarousel-navigation) {
    position: absolute;
    right: 3.5rem;
    top: -40px;
    width: 10px;
}
:deep(.VueCarousel-navigation-button) {
    width: 3.7rem;
    height: 3.6rem;
    border: 1px solid #333333;
    padding: 0 !important;
    font-family: none;
    color: #fff;
    font-size: 35px;
}
:deep(.VueCarousel-navigation-prev) {
    background: linear-gradient(0deg, #2f2b4f 0%, #201e3a 100%);
    border-radius: 50% 0rem 0rem 50% !important;
}
:deep(.VueCarousel-navigation-next) {
    background: linear-gradient(0deg, #2f2b4f 0%, #201e3a 100%);
    border-radius: 0rem 50% 50% 0rem !important;
}
</style>
