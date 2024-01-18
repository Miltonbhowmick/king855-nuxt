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
                <a @click="showMobileLoginModal = true" class="btn login-btn"
                    >Login</a
                >
                <a class="btn free-btn">Free</a>
            </div>
            <ModalMobileLogin
                v-if="showMobileLoginModal"
                @hideModal="hideMobileLoginModal"
            />
        </div>
        <div class="mobile-game-content-list">
            <div class="category-list">
                <div
                    v-for="(categoryObj, categoryId) in categoryList"
                    :key="'category_' + categoryId"
                    class="item"
                    :class="{ active: activeCategory.id === categoryObj.id }"
                    @click="handleActiveCategory(categoryObj)"
                >
                    <div class="image">
                        <img :src="categoryObj?.src" />
                    </div>
                    <a class="name">{{ categoryObj?.name }}</a>
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
                                ) in activeSupplier.itemList"
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
                            v-for="(
                                hotItem, hotId
                            ) in activeMobileHotItems.itemList"
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
                <div
                    v-for="(categoryObj, categoryId) in categoryList"
                    :key="'category_' + categoryId"
                    class="item"
                    :class="{ active: activeCategory.id === categoryObj.id }"
                    @click="handleActiveCategory(categoryObj)"
                >
                    <div class="image">
                        <img :src="categoryObj?.src" />
                    </div>
                    <a class="name">{{ categoryObj?.name }}</a>
                </div>
            </div>
            <div class="data-list">
                <div class="supplier-list">
                    <h2 class="title">Supplier</h2>
                    <div class="items">
                        <div
                            v-for="(
                                supplierItem, supplierId
                            ) in activeSupplier.itemList"
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
                            v-for="(hotItem, hotId) in activeHotItems.itemList"
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
var showMobileLoginModal = ref(false);

const hideMobileLoginModal = () => {
    showMobileLoginModal.value = false;
};

let categoryList = [
    {
        id: 1,
        name: "Casino",
        src: "/images/tab-icon-1.png",
    },
    {
        id: 2,
        name: "Sports",
        src: "/images/tab-icon-2.png",
    },
    {
        id: 3,
        name: "Slots",
        src: "/images/tab-icon-3.png",
    },
    {
        id: 4,
        name: "Chess",
        src: "/images/tab-icon-7.png",
    },
    {
        id: 5,
        name: "Fish",
        src: "/images/tab-icon-100.png",
    },
];
var activeCategory = ref(categoryList[0]);

let hotItemList = [
    {
        categoryId: 1,
        itemList: [
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
        ],
    },
];
let mobileHotItemList = [
    {
        categoryId: 1,
        itemList: [
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
        ],
    },
];

let supplierItemList = [
    {
        categoryId: 1,
        itemList: [
            {
                imageSrc: "/images/supplier-102.png",
                brandName: "CT Live",
            },
            {
                imageSrc: "/images/supplier-102.png",
                brandName: "BG Live",
            },
        ],
    },
    {
        categoryId: 2,
        itemList: [
            {
                imageSrc: "/images/supplier-205.png",
                brandName: "CT Live",
            },
        ],
    },
    {
        categoryId: 3,
        itemList: [
            {
                imageSrc: "/images/supplier-301.png",
                brandName: "CT Live",
            },
            {
                imageSrc: "/images/supplier-302.png",
                brandName: "CT Live",
            },
            {
                imageSrc: "/images/supplier-308.png",
                brandName: "CT Live",
            },
            {
                imageSrc: "/images/supplier-704.png",
                brandName: "CT Live",
            },
        ],
    },
    {
        categoryId: 4,
        itemList: [
            {
                imageSrc: "/images/supplier-702.png",
                brandName: "CT Live",
            },
            {
                imageSrc: "/images/supplier-704.png",
                brandName: "CT Live",
            },
            {
                imageSrc: "/images/supplier-706.png",
                brandName: "CT Live",
            },
        ],
    },
    {
        categoryId: 5,
        itemList: [
            {
                imageSrc: "/images/hot-302-7001.png",
                brandName: "CT Live",
            },
            {
                imageSrc: "/images/hot-302-7002.png",
                brandName: "CT Live",
            },
            {
                imageSrc: "/images/hot-302-7003.png",
                brandName: "CT Live",
            },
            {
                imageSrc: "/images/hot-302-7004.png",
                brandName: "CT Live",
            },
            {
                imageSrc: "/images/hot-302-7005.png",
                brandName: "CT Live",
            },
            {
                imageSrc: "/images/hot-302-7006.png",
                brandName: "CT Live",
            },
        ],
    },
];

var activeSupplier = ref(supplierItemList[0]);
var activeHotItems = ref(hotItemList[0]);
var activeMobileHotItems = ref(mobileHotItemList[0]);

const handleActiveCategory = (categoryObj) => {
    activeCategory.value = categoryObj;
    activeSupplier.value = supplierItemList.find(
        (element) => element.categoryId === categoryObj.id
    );
    // console.log("=====", activeSupplier.value);
    // activeHotItems.value = hotItemList.find(
    //     (element) => element.categoryId === categoryObj.id
    // );
};
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
                @media (max-width: 431px) {
                    border-radius: 15px;
                    height: 140px;
                }
            }
        }
        @media (max-width: 431px) {
            padding: 0 0.7rem;
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
                @media (max-width: 431px) {
                    font-size: 0.8rem;
                }
            }
            .marquee {
                .notice-text {
                    font-size: 12px;
                }
            }
            @media (max-width: 431px) {
                padding: 0 0 7px 0;
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
                @media (max-width: 431px) {
                    padding: 9px 0;
                    font-size: 12px;
                    border-radius: 4px;
                }
            }
        }
        @media (max-width: 431px) {
            border-radius: 10px;
            padding: 0.8rem;
            margin: 0.7rem;
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
                .image {
                    @media (max-width: 431px) {
                        display: flex;
                        width: 60%;
                    }
                }
                @media (max-width: 576px) {
                    border-radius: 20px;
                    height: 18vw;
                }
                @media (max-width: 431px) {
                    border-radius: 17px;
                    width: 4rem;
                    height: 15vw;
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
                            @media (max-width: 431px) {
                                width: 250px;
                            }
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
                                @media (max-width: 576px) {
                                    font-size: 14px;
                                }
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
                                @media (max-width: 576px) {
                                    font-size: 14px;
                                    padding: 5px 25px;
                                }
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
                                @media (max-width: 576px) {
                                    font-size: 14px;
                                }
                            }
                        }

                        @media (max-width: 576px) {
                            width: 31.6%;
                        }
                    }
                }
            }
            @media (max-width: 576px) {
                margin-top: 30px;
            }
            @media (max-width: 431px) {
                margin-top: 0;
            }
        }
        @media (max-width: 576px) {
            padding: 0 0.7rem 20px 0.7rem;
            gap: 10px;
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
    @media (max-width: 431px) {
        right: 1.5rem;
        top: -20px;
    }
}
:deep(.VueCarousel-navigation-button) {
    width: 3.7rem;
    height: 3.6rem;
    border: 1px solid #333333;
    padding: 0 !important;
    font-family: none;
    color: #fff;
    font-size: 35px;
    @media (max-width: 431px) {
        width: 1.7rem;
        height: 1.6rem;
        font-size: 18px;
    }
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
