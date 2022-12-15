<template>
  <ion-page>
    <ion-header mode="ios">
      <ion-toolbar color="secondary">
        <ion-title>โชคดีการเกษตร</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid class="mygrid" padding>
        <!-- <ion-row class="myrow"> -->
          <ion-col class="mycols">
            <div class="myBTNs" @click="() => router.push('/cast')">
              <ion-icon class="largeIcon" name="cash" item-start></ion-icon>
              <p class="myHeader">คำนวน</p>
            </div>
          </ion-col>
          <ion-col class="mycols">
            <div class="myBTNs1" @click="() => router.push('/Product-List')">
              <ion-icon class="largeIcon" name="list" item-start></ion-icon>
              <p class="myHeader">รายการสินค้า</p>
            </div>
          </ion-col>
          <ion-col class="mycols">
            <div class="myBTNs" @click="() => router.push('/Export')">
              <ion-icon class="largeIcon" name="albums" item-start></ion-icon>
              <p class="myHeader">ตรวจสอบการจัดส่ง</p>
            </div>
          </ion-col>
          <ion-col class="mycols">
            <div class="myBTNs1" @click="() => router.push('/history')">
              <ion-icon class="largeIcon" name="time" item-start></ion-icon>
              <p class="myHeader">รายการสั่งซื้อย้อนหลัง</p>
            </div>
          </ion-col>
          <ion-col class="mycols">
            <div class="myBTNs" @click="() => router.push('/edit-product')">
              <ion-icon class="largeIcon" name="list" item-start></ion-icon>
              <p class="myHeader">แก้ไขรายการสินค้า</p>
            </div>
          </ion-col>
          <ion-col class="mycols">
            <div class="myBTNs1" @click="() => router.push('/edit-employee')">
              <ion-icon class="largeIcon" name="man" item-start></ion-icon>
              <p class="myHeader">แก้ไขข้อมูลพนักงาน</p>
            </div>
          </ion-col>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonGrid,
  IonRow,
  IonSlides,
  IonSlide,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardHeader,
  IonIcon,
  toastController,
  IonFabButton,
  IonPopover,
  IonTitle,
  IonFab,
  IonList,
  IonItem,
  IonLabel,
  IonCol
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Deal } from "../mocks/promotionDeal";

export default defineComponent({
  name: "dashBoard",
  components: {
    // IonFabButton,
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonGrid,
    // IonRow,
    // IonSlides,
    // IonSlide,
    // IonCard,
    // IonCardHeader,
    // IonCardContent,
    // IonCardSubtitle,
    IonIcon,
    // IonPopover,
    IonTitle,
    // IonFab,
    // IonList,
    // IonItem,
    // IonLabel,
    IonCol
  },
  data() {
    return {
      promo: [],
    };
  },
  created() {
    this.promo = Deal;
    this.startAlert();
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {
    async cautionAlert(text) {
      const toast = await toastController.create({
        position: "top",
        message: `${text} not available`,
        icon: "alert-circle",
        duration: 1000,
        mode: "ios"
      });
      return toast.present();
    },
    async startAlert() {
      const toast = await toastController.create({
        position: "top",
        message: `This app use Vue framework`,
        icon: "information-circle",
        duration: 2000,
        mode: "ios"
      });
      return toast.present();
    },
  },
});
</script>

<style>
.logouticon {
  margin-left: 9px;
}

.card-slide {
  box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.25);
}

.headerImg {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: -2rem;
}

.toolbar-background-md {
  border-color: #000 8;
  background: #000 8;
}

.item-md {
  border-radius: 13px;
  border: solid 1px #707070 40;
  padding-left: 16px;
  padding-right: 0;
  position: relative;
  font-size: 1.6rem;
  font-weight: normal;
  text-transform: none;
  color: #000;
  background-color: #fff;
  -webkit-box-shadow: none;
  box-shadow: #a6bad3 3d 2px 3px 13px;
  -webkit-transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.bar-button-default-md,
.bar-button-clear-md-default,
.bar-button-md-default {
  color: #2a80b9;
  background-color: transparent;
}

.col {
  padding: 1px;
}

.mygrid {
  padding-top: 2px;
  padding-right: 20px;
  padding-bottom: 35px;
  padding-left: 20px;
}

.myrow {
  padding-left: 18px;
  padding-right: 55px;
}

.myBTNs {
  background: #388a1ca7;
  color: white;
  height: 120px;
  margin: 1%;
  border-radius: 6px;
  box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
  -webkit-box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
}

.myBTNs4 {
  background: #388a1ca7;
  color: white;
  height: 120px;
  margin: 1%;
  border-radius: 6px;
  box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
  -webkit-box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
}

.myBTNs5 {
  background: #388a1ca7;
  color: white;
  height: 120px;
  margin: 1%;
  border-radius: 6px;
  box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
  -webkit-box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
}

.largeIcon {
  padding-top: 3%;
  padding-left: 8px;
  font-size: 50px;
}

.myHeader {
  position: relative;
  position: relative;
  margin-top: 0.1px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 2px;
  margin-left: 10px;
  padding-bottom: 22%;
  padding-top: 6px;
}

.myBTNs1 {
  background: #325d26a7;
  color: white;
  position: relative;
  height: 120px;
  margin: 1px;
  border-radius: 6px;
  box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
  -webkit-box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
}

.myBTNs3 {
  background: #325d26a7;
  color: white;
  height: 120px;
  position: relative;
  /* left: 35px; */
  margin: 1px;
  border-radius: 6px;
  box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
  -webkit-box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
}

.myDiv {
  width: 100%;
  text-align: center;
}

.cardpromo {
  height: 300px;
}
</style>