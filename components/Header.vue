<template>
    <header class="header">
        <div class="head-box">
            <div class="logo">
                <a><img src="/images/company-logo.png" alt="company-logo" /></a>
                <div class="notice">
                    <div class="notice-arrow">
                        <i class="fa fa-volume-up" aria-hidden="true"></i>
                    </div>
                    <!-- <marquee class="marquee" direction="left" scrollamount="4">
                        <span class="notice-text"
                            >KING855 网上博彩 有你才精彩 KING855
                            打开富贵门</span
                        ></marquee
                    > -->
                </div>
            </div>
            <div class="header-nav-links">
                <div class="login-before">
                    <a @click="showLoginModal = true" class="btn login-btn"
                        >Login</a
                    >
                    <a class="btn free-btn">Free</a>
                </div>
                <div class="login-after"></div>
                <div class="head-language">
                    <div class="current-language">
                        <img
                            src="/images/flag/Flag-Taiwan.png"
                            alt="flag-taiwan"
                        />
                    </div>
                </div>
            </div>
        </div>
        <ModalLogin
            v-if="showLoginModal"
            :modalOpen="showLoginModal"
            @hideModal="hideLoginModal"
        />
    </header>
</template>

<script setup>
var showLoginModal = ref(false);

const hideLoginModal = () => {
    showLoginModal.value = false;
};
</script>

<style scoped lang="scss">
.header {
    height: 50px;
    position: relative;
    .head-box {
        height: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background: #191919;
        // min-width: 1100px;
        padding: 0 10%;
        .logo {
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            a {
                padding: 2px 20px 2px 0;
                border-right: 1px solid #393657;
                height: 40px;
            }
            .notice {
                width: 500px;
                line-height: 42px;
                color: #fff;
                overflow: hidden;
                display: flex;
                .notice-arrow {
                    height: 42px;
                    font-size: 18px;
                    margin: 0 10px;
                    .icon-web-html {
                        &::before {
                            content: "\E637";
                        }
                    }
                }
                .marquee {
                    .notice-text {
                        font-size: 14px;
                    }
                }
            }
        }
        .header-nav-links {
            display: flex;
            align-items: center;
            gap: 5px;
            .login-before {
                .btn {
                    padding: 4px 10px;
                    border-radius: 4px;
                    color: #fff;
                    opacity: 1;
                    text-align: center;
                    margin-right: 10px;
                    font-size: 0.875rem;
                    &.login-btn {
                        cursor: pointer;
                        border: 1px solid rgb(19, 191, 255);
                    }
                    &.free-btn {
                        cursor: pointer;
                        background: rgb(255, 0, 59);
                    }
                }
            }
            .head-language {
                .current-language {
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    overflow: hidden;
                }
            }
        }
    }
}
</style>

