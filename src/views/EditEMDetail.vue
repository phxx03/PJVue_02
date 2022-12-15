<template>
    <ion-page>
        <ion-header mode="ios">
            <ion-toolbar color="secondary">
                <ion-buttons slot="start">
                    <ion-back-button text=""></ion-back-button>
                </ion-buttons>
                <ion-title>แก้ไขข้อมูลพนักงาน</ion-title>
            </ion-toolbar>
        </ion-header>

      <ion-content>
        <ion-card>
          <ion-card-content color="tertiary">
            <div class="ion-no-margin">
              <ion-list>
                <ion-card color="tertiary" class="ion-no-padding border-radius">
                        <img
                          src="https://www.freeiconspng.com/thumbs/person-icon/name-people-person-user-icon--icon-search-engine-1.png"
                        />
                  <ion-grid>
                    <ion-row>
                      <ion-col size="7">
                        <ion-label>
                          <h2><b>ID</b></h2>
                          <h3><ion-textarea placeholder="0865479643"></ion-textarea></h3>
                        </ion-label>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col size="7">
                        <ion-label>
                          <h2><b>ชื่อ</b></h2>
                          <h3><ion-textarea placeholder="เจ้ ไก่"></ion-textarea></h3>
                        </ion-label>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col size="7">
                        <ion-label>
                          <h2><b>user</b></h2>
                          <h3><ion-textarea placeholder="kai001"></ion-textarea></h3>
                        </ion-label>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col size="7">
                        <ion-label>
                          <h2><b>Password</b></h2>
                          <ion-input type="password" value="kai001"></ion-input>
                        </ion-label>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                  <br/>
                   <ion-row>
                      <ion-col size="6" >
                        <div class="BT1">
                            <ion-button color="danger" class="ion-no-margin" expand="full" @click="() => router.push('/edit-employee')">ลบ</ion-button>
                        </div>
                      </ion-col>
                      <ion-col size="6" >
                        <div class="BT1">
                            <ion-button color="success" class="ion-no-margin" expand="full" @click="() => router.push('/edit-employee')">ยืนยัน</ion-button>
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
  