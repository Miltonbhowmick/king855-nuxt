<template>
    <section class="mobile-login-modal">
        <div class="modal-container">
            <a @click="close" class="close"
                ><i class="fa fa-times" aria-hidden="true"></i>
            </a>
            <div class="header">
                <a class="company-link"
                    ><div class="image">
                        <img
                            src="/images/login_logo.png"
                            alt="company-logo"
                        /></div
                ></a>
            </div>
            <div class="body-content">
                <form class="form">
                    <div class="input-group">
                        <i class="fa fa-user input-icon" aria-hidden="true"></i>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div class="input-group">
                        <i class="fa fa-lock input-icon" aria-hidden="true"></i>
                        <input type="password" placeholder="Password" />
                    </div>
                    <div class="input-group">
                        <i class="fa fa-key input-icon" aria-hidden="true"></i>
                        <input type="text" placeholder="Piccode" />
                    </div>
                    <button class="login-btn">Login</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
const emit = defineEmits();

const close = () => {
    emit("hideModal");
};
</script>

<style scoped lang="scss">
section.mobile-login-modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(90deg, #010101, #3c3c3c);
    .modal-container {
        margin-top: 90px;
        .close {
            position: absolute;
            top: 10px;
            right: 14px;
            i {
                color: #fff;
                font-size: 25px;
            }
        }
        .header {
            display: flex;
            justify-content: center;
            .company-link {
                width: 55%;
            }
        }
        .body-content {
            margin-top: 74px;
            display: flex;
            justify-content: center;
            .form {
                width: 80%;
                display: flex;
                flex-direction: column;
                gap: 5px;
                .input-group {
                    padding: 10px 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
                    i {
                        font-size: 20px;
                        margin-right: 10px;
                        color: rgba(255, 255, 255, 0.5);
                    }
                    input {
                        background: none;
                        border: none;
                        width: 68.2vw;
                        height: 7.733vw;
                        color: #fff;
                        &::placeholder {
                            font-size: 16px;
                            color: rgba(255, 255, 255, 0.5);
                            text-transform: lowercase;
                        }
                    }
                }
                .login-btn {
                    padding: 12px 0;
                    text-align: center;
                    color: #fff;
                    margin-top: 60px;
                    font-size: 16px;
                    border-radius: 5px;
                    background: linear-gradient(0deg, #27478e 0%, #736fc2 100%);
                    box-shadow: 0 2px #5bb2f6;
                }
            }
        }
    }
}
</style>
