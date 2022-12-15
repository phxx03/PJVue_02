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
            <ion-card>
                <ion-card-content color="tertiary">
                    <ion-grid>
                  <ion-row>
                    <ion-col size="7">
                      <ion-label>
                        <h2><b>เจ้ ไก่</b></h2>
                        <h2>0987654321</h2>
                      </ion-label>
                    </ion-col>
                    <ion-col>
                        <ion-label>
                        <h2><b>จัดส่ง</b></h2>
                      </ion-label>
                    </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-label>
                                <h3>เลขที่ 521 หมู่ 2 ...</h3>
                            </ion-label>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col size="7">
                      <ion-label>
                          <ion-text color="danger">
                            <h2>
                              ยอดรวม
                            </h2>
                          </ion-text>
                      </ion-label>
                    </ion-col>
                    <ion-col size="5">
                      <ion-label >
                          <ion-text color="danger">
                            <h2>
                              1,500<small>&nbsp;บาท</small>
                            </h2>
                          </ion-text>
                      </ion-label>
                    </ion-col>
                  </ion-row>
                </ion-grid>
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-content color="tertiary">
                    <div class="ion-no-margin">
                        <ion-card color="tertiary" class="ion-no-padding border-radius">
                            <ion-item button class="ion-margin-bottom" color="tertiary" lines="full"
                                v-for="ticket in tlist" :key="ticket.go">
                                <ion-avatar slot="start">
                                    <ion-img :src="ticket.img" height='60' width='120'></ion-img>
                                </ion-avatar>
                                <ion-label>
                                    <b> {{ ticket.go }}</b>
                                    <ion-text color="medium">
                                        <h3>{{ ticket.gtime }} x 1</h3>
                                    </ion-text>
                                </ion-label>
                                <ion-label slot="end">
                                    <ion-text> {{ ticket.gtime }} </ion-text>
                                </ion-label>
                            </ion-item>
                        </ion-card>
                    </div>
                </ion-card-content>
            </ion-card>
        </ion-content><br/>
                   <ion-row>
                      <ion-col size="6" >
                        <div class="BT1">
                            <ion-button color="danger" class="ion-no-margin" expand="full" @click="() => router.push('/Export')">ถอยกลับ</ion-button>
                        </div>
                      </ion-col>
                      <ion-col size="6" >
                        <div class="BT1">
                            <ion-button color="success" class="ion-no-margin" expand="full" @click="() => router.push('/Export')">จัดส่งแล้ว</ion-button>
                        </div>
                      </ion-col>
                    </ion-row>
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
    IonFabButton,
    IonText
  } from '@ionic/vue';
  import moment from 'moment';
  import { tickets } from "../mocks/flightTicket"
  import { defineComponent } from 'vue';
  import { useRouter } from "vue-router";

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
        // IonFabButton,
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
    setup() {
      return {
        router: useRouter(),
      };
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
  