<template>
    <ion-page>
        <ion-header mode="ios">
            <ion-toolbar color="secondary">
                <ion-buttons slot="start">
                    <ion-back-button text=""></ion-back-button>
                </ion-buttons>
                <ion-title>แก้ไขรายการสินค้า</ion-title>
            </ion-toolbar>
        </ion-header>

      <ion-content>
        <ion-card>
          <ion-card-content color="tertiary">
            <div class="ion-no-margin">
              <ion-list>
                <ion-card color="tertiary" class="ion-no-padding border-radius">
                        <img
                          src="https://inwfile.com/s-ca/8rdjl3.jpg"
                        />
                  <ion-grid>
                    <ion-row>
                      <ion-col size="7">
                        <ion-label>
                          <h2><b>Balance 910</b></h2>
                          <h3><ion-textarea placeholder="บาลานส์ 910"></ion-textarea></h3>
                        </ion-label>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col size="7">
                        <ion-label>
                          <h2><b>ราคา</b></h2>
                          <h3><ion-textarea placeholder="350"></ion-textarea></h3>
                        </ion-label>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col size="7">
                        <ion-label>
                          <h2><b>เหลือ</b></h2>
                          <h3><ion-textarea placeholder="5"></ion-textarea></h3>
                        </ion-label>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                  <br/>
                   <ion-row>
                      <ion-col size="6" >
                        <div class="BT1">
                            <ion-button color="danger" class="ion-no-margin" expand="full" @click="() => router.push('/edit-product')">ลบ</ion-button>
                        </div>
                      </ion-col>
                      <ion-col size="6" >
                        <div class="BT1">
                            <ion-button color="success" class="ion-no-margin" expand="full" @click="() => router.push('/edit-product')">ยืนยัน</ion-button>
                        </div>
                      </ion-col>
                    </ion-row>
                </ion-card>
              </ion-list>
            </div>
          </ion-card-content>
        </ion-card>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonIcon,
    IonCol,
    IonGrid,
    IonRow,
    IonCardContent,
    IonSlide,
    IonSlides,
    IonList,
    IonLabel,
    IonText,
    IonAccordionGroup,
    IonAccordion,
    IonChip,
    IonCardHeader,
    IonItem,
    IonButton,
    IonCardSubtitle,
  } from "@ionic/vue";
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";
  
  export default defineComponent({
    name: "HomePage",
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonButtons,
      IonBackButton,
      IonCard,
    //   IonIcon,
      IonCol,
      IonGrid,
      IonRow,
      IonCardContent,
    //   IonSlide,
    //   IonSlides,
      IonList,
      IonLabel,
    //   IonText,
    //   IonAccordionGroup,
    //   IonAccordion,
    //   IonChip,
    //   IonCardHeader,
    //   IonCardSubtitle,
    //   IonItem,
      IonButton
    },
    setup() {
      return {
        router: useRouter(),
      };
    },
  });
  </script>
  <style>
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
  .BT1{
    margin: 1%;
    border-radius: 60px;
    box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
    -webkit-box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
  }
  </style>
  