<template>
    <div>
        <div class="modal-overlay" v-if="modalOpen" @click="close"></div>
        <div class="modal-box" v-if="modalOpen">
            <div class="content">
                <div class="close">
                    <a @click="close"
                        ><i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="header">
                    <div class="company-logo">
                        <img
                            src="/images/company-logo.png"
                            alt="company-logo"
                        />
                    </div>
                </div>
                <div class="body-content">
                    <form class="form">
                        <div class="input-group">
                            <i
                                class="fa fa-user input-icon"
                                aria-hidden="true"
                            ></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-group">
                            <i
                                class="fa fa-lock input-icon"
                                aria-hidden="true"
                            ></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div class="input-group">
                            <i
                                class="fa fa-key input-icon"
                                aria-hidden="true"
                            ></i>
                            <input type="text" placeholder="Piccode" />
                        </div>
                        <div class="check-box-input-group">
                            <input type="checkbox" />
                            <label>Remember me</label>
                        </div>
                        <button class="login-btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    modalOpen: false,
});

const emit = defineEmits();

const close = () => {
    emit("hideModal");
};
</script>

<style scoped lang="scss">
.modal-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(15, 3, 3, 0.5);
}
.modal-box {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999999;
    transform: translate(-50%, -50%);
    color: #333;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    background: #1f2229;
    border: 1px solid rgba(162, 177, 216, 0.2);
    padding: 15px;
    .content {
        position: relative;
        .close {
            position: absolute;
            right: 3px;
            top: 3px;
            a {
                width: 10px;
                height: 10px;
                cursor: pointer;
                i {
                    font-size: 30px;
                    font-weight: 300;
                }
            }
        }
        .header {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .body-content {
            margin-top: 25px;
            .form {
                display: flex;
                flex-direction: column;
                gap: 15px;
                .input-group {
                    position: relative;
                    .input-icon {
                        position: absolute;
                        width: 40px;
                        top: 50%;
                        transform: translateY(-50%);
                        font-size: 23px;
                        text-align: center;
                        color: #c9c9c9;
                    }
                    input {
                        height: 47px;
                        width: 100%;
                        font-size: 14px;
                        border: 1px solid #424242;
                        border-radius: 3px;
                        box-sizing: border-box;
                        background: transparent;
                        outline: none;
                        caret-color: #fff;
                        color: #fff;
                        padding: 0 10px 0 40px;
                    }
                }
                .check-box-input-group {
                    display: flex;
                    align-items: center;
                    input {
                        width: 17px;
                        height: 17px;
                        border-radius: 3px;
                        accent-color: #000;
                    }
                    label {
                        margin-left: 3px;
                        font-size: 15px;
                        color: #fff;
                    }
                }
                .login-btn {
                    width: 100%;
                    padding: 10px 0;
                    color: #fff;
                    border: none;
                    background: linear-gradient(0deg, #ef8f27 0%, #f5bc5e 100%);
                    border-radius: 3px;
                    font-size: 18px;
                }
            }
        }
    }
}
</style>
