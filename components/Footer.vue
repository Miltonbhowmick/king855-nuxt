<template>
    <div class="footer">
        <ul class="footer-nav">
            <li class="item">
                <div class="partner-list">
                    <a
                        ><div><img src="/images/game1.png" alt="" /></div
                    ></a>
                    <a
                        ><div><img src="/images/game2.png" alt="" /></div
                    ></a>
                    <a
                        ><div><img src="/images/game3.png" alt="" /></div
                    ></a>
                    <a
                        ><div><img src="/images/game4.png" alt="" /></div
                    ></a>
                    <a
                        ><div><img src="/images/game5.png" alt="" /></div
                    ></a>
                    <a
                        ><div><img src="/images/game6.png" alt="" /></div
                    ></a>
                    <a
                        ><div><img src="/images/game7.png" alt="" /></div
                    ></a>
                    <a
                        ><div><img src="/images/game8.png" alt="" /></div
                    ></a>
                    <a
                        ><div><img src="/images/game9.png" alt="" /></div
                    ></a>
                    <a
                        ><div><img src="/images/game10.png" alt="" /></div
                    ></a>
                </div>
            </li>
            <li class="item">
                <div class="connect-box">
                    <div class="connect-list wd-20">
                        <div class="connect-top">
                            <em class="i18n" data-tag="contactUs">Pagcor</em>
                        </div>
                        <div class="connect-bom">
                            <a
                                ><div>
                                    <img src="/images/Pagcor.png" alt="" /></div
                            ></a>
                        </div>
                    </div>
                    <div class="connect-list">
                        <div class="connect-top">
                            <em class="i18n" data-tag="paymentCooperation"
                                >Payment Cooperation</em
                            >
                        </div>
                        <div class="connect-bom">
                            <a
                                ><div>
                                    <img
                                        src="/images/icon-81pay.png"
                                        alt=""
                                    /></div
                            ></a>
                            <a
                                ><div>
                                    <img
                                        src="/images/icon-alipay.png"
                                        alt=""
                                    /></div
                            ></a>
                            <a
                                ><div>
                                    <img
                                        src="/images/icon-wing.png"
                                        alt=""
                                    /></div
                            ></a>
                            <a
                                ><div>
                                    <img
                                        src="/images/icon-wechat.png"
                                        alt=""
                                    /></div
                            ></a>
                            <a
                                ><div>
                                    <img
                                        src="/images/icon-aba.png"
                                        alt=""
                                    /></div
                            ></a>
                        </div>
                    </div>
                </div>
            </li>
            <div class="copyright">
                <div class="copyright-help">
                    <a class="i18n" data-tag="aboutUs">about us</a>
                    <a class="i18n" data-tag="PrivacyPolicy">Privacy Policy</a>
                    <a class="i18n" data-tag="ResponsibleGambling"
                        >Responsible Gambling</a
                    >
                </div>
                <div>COPYRIGHT © King855 RESERVED</div>
            </div>
        </ul>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: #252525;
    border-top: 1px solid #393657;
    .footer-nav {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 80%;
        padding: 15px 0;
        margin: auto;
        list-style: none;
        .item {
            .partner-list {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                a {
                    display: flex;
                    justify-content: center;
                    width: 18%;
                    margin-bottom: 20px;
                }
            }
            .connect-box {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                .connect-list {
                    display: flex;
                    flex-direction: column;
                    align-items: self-start;
                    margin-right: 60px;
                    &.wd-20 {
                        width: 20%;
                    }
                    .connect-top {
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        em {
                            display: block;
                            color: #fff;
                            font-size: 16px;
                            line-height: 22px;
                            margin-bottom: 16px;
                            font-style: normal;
                        }
                    }
                    .connect-bom {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 15px;
                        a {
                        }
                    }
                }
            }
        }
        .copyright {
            display: flex;
            justify-content: center;
            padding: 20px 0;
            text-align: center;
            font-size: 12px;
            .copyright-help {
                display: flex;
                align-items: center;
                gap: 20px;
            }
        }
    }
}
</style>
