import { IonBadge, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonNote, IonRow } from "@ionic/react";
import { bookmarkOutline, shareOutline } from "ionicons/icons";

import "./Post.css";

export const Post = ({ post }) => {

    return (

        <IonCard routerLink={ `/post/${ post.id }` }>
            <img src={ post.image } alt="main post" className="post-image" />

            <IonCardHeader>
                <IonRow className="ion-align-items-center ion-justify-content-between">

                    <IonRow className="ion-align-items-center ion-justify-content-between">
                        <img src={ post.authorImage } className="post-author-avatar" alt="post author" />
                        <IonCardSubtitle className="ion-no-margin ion-no-padding ion-margin-start">
                            { post.author }
                        </IonCardSubtitle>
                    </IonRow>
                        <IonNote>{ post.date }</IonNote>
                </IonRow>
                <IonCardTitle className="post-title">{ post.title }</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                <p className="post-content">
                    { post.content }
                </p>

                <IonRow className="post-footer ion-align-self-center ion-justify-content-between">
                    <div>
                        <IonButton fill="clear" color="primary">
                            <IonIcon icon={ shareOutline } />
                        </IonButton>
                        <IonButton fill="clear" color="primary">
                            <IonIcon icon={ bookmarkOutline } />
                        </IonButton>
                    </div>
                    
                    <div>
                        <IonBadge color="primary" className="post-category">
                            { post.category }
                        </IonBadge>
                    </div>
                </IonRow>
            </IonCardContent>
        </IonCard>
    );
}