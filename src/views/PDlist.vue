<template>
    <ion-page>
        <ion-header mode="ios">
            <ion-toolbar color="secondary">
                <ion-buttons slot="start">
                    <ion-back-button text=""></ion-back-button>
                </ion-buttons>
                <ion-title>รายการสินค้า</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-searchbar mode="ios" placeholder="ค้นหาสินค้า"></ion-searchbar>
            <ion-card>
                <ion-card-content color="tertiary">
                    <div class="ion-no-margin">
                        <ion-card color="tertiary" class="ion-no-padding border-radius">
                            <!-- <ion-row style="border-bottom: 1px solid #e0e0e0;">
                                <ion-col>
                                    <ion-select okText="ตกลง" cancelText="ยกเลิก" interface="action-sheet"
                                        placeholder="สายการบิน" mode="ios">
                                        <ion-select-option value="air">AIR ASIA</ion-select-option>
                                        <ion-select-option value="nok">NOK AIR</ion-select-option>
                                        <ion-select-option value="tla">THAI LION AIR</ion-select-option>
                                        <ion-select-option value="tsm">THAI SMILE</ion-select-option>
                                    </ion-select>
                                </ion-col>
                                <ion-col>
                                    <ion-select okText="ตกลง" cancelText="ยกเลิก" interface="action-sheet"
                                        placeholder="เวลาออก" mode="ios">
                                        <ion-select-option value="first">เที่ยวบินแรก (00.00 - 06.00)
                                        </ion-select-option>
                                        <ion-select-option value="morning">เที่ยวบินตอนเช้า (06.00 - 12.00)
                                        </ion-select-option>
                                        <ion-select-option value="noon">เที่ยวบินช่วงบ่าย (12.00 - 18.00)
                                        </ion-select-option>
                                        <ion-select-option value="night">เที่ยวบินกลางคืน (18.00 - 00.00)
                                        </ion-select-option>
                                    </ion-select>
                                </ion-col>
                                <ion-col>
                                    <ion-select okText="ตกลง" cancelText="ยกเลิก" interface="action-sheet"
                                        placeholder="ประเภท" mode="ios">
                                        <ion-select-option value="min">ราคาถูกที่สุด</ion-select-option>
                                        <ion-select-option value="mid">คุ้มราคา</ion-select-option>
                                        <ion-select-option value="max">ราคาสูงที่สุด</ion-select-option>
                                        <ion-select-option value="out">เวลาออกเดินทาง</ion-select-option>
                                        <ion-select-option value="to">เวลาถึง</ion-select-option>
                                    </ion-select>
                                </ion-col>
                            </ion-row> -->
                            <!-- <ion-list-header lines="none" mode="md" color="tertiary">
                                <ion-label>เลือกรายการ</ion-label>
                            </ion-list-header> -->
                            <ion-item button class="ion-margin-bottom" color="tertiary" lines="full"
                                v-for="ticket in tlist" :key="ticket.go">
                                <ion-avatar slot="start">
                                    <ion-img :src="ticket.img" height='60' width='120'></ion-img>
                                </ion-avatar>
                                <ion-label>
                                    <b> {{ ticket.go }}</b>
                                    <ion-text color="medium">
                                        <h3>{{ ticket.gtime }}</h3>
                                    </ion-text>
                                </ion-label>
                                <ion-label slot="end">
                                    <ion-text> เหลือ {{ ticket.price }} </ion-text>
                                </ion-label>
                            </ion-item>
                        </ion-card>
                    </div>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonHeader,
    IonContent,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonItem,
    IonSelect,
    IonLabel,
    IonAvatar,
    IonImg,
    IonRow,
    IonCol,
    IonSelectOption,
    IonListHeader,
    IonText
} from '@ionic/vue';
import moment from 'moment';
import { tickets } from "../mocks/flightTicket"
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Air-way-ticket',
    components: {
        IonHeader,
        IonContent,
        IonPage,
        IonTitle,
        IonToolbar,
        IonBackButton,
        IonButtons,
        IonCard,
        IonCardContent,
        IonItem,
        // IonSelect,
        IonLabel,
        IonAvatar,
        IonImg,
        // IonRow,
        // IonCol,
        // IonSelectOption,
        // IonListHeader,
        IonText
    },
    data() {
        return {
            tlist: [],
        }
    },
    created() {
        this.tlist = tickets
    },
    methods: {
        segmentChanged(ev) {
            this.segment = ev.detail.value;
        },
        formatDate0(event) {
            this.date0 = moment(event.target.value).format("DD/MM/YYYY");
        },
        formatDate1(event) {
            this.date1 = moment(event.target.value).format("DD/MM/YYYY");
        },
        formatDate2(event) {
            this.date2 = moment(event.target.value).format("DD/MM/YYYY");
        },
        incrementPeople0() {
            if (this.people0 < 5) {
                this.people0++;
            }
        },
        decrementPeople0() {
            if (this.people0 > 0) {
                this.people0--;
            }
        },

        incrementPeople1() {
            if (this.people1 < 5) {
                this.people1++;
            }
        },
        decrementPeople1() {
            if (this.people1 > 0) {
                this.people1--;
            }
        },

        incrementPeople2() {
            if (this.people2 < this.people0) {
                this.people2++;
            }
        },
        decrementPeople2() {
            if (this.people2 > 0) {
                this.people2--;
            }
        },
    }
});
</script>

<style scoped>
.cardpromo {
    height: 300px;
}

.imgpromo {
    height: 220px;
}

ion-searchbar {
    margin: auto;
    width: 100%;
    border-radius: 1px;
}
</style>
