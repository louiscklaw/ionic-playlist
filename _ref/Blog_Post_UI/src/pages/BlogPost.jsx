import { IonBackButton, IonBadge, IonButton, IonButtons, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonNote, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { bookmarkOutline, shareOutline } from 'ionicons/icons';
import { useParams } from 'react-router';
import { blogPosts } from '../localData';
import './BlogPost.css';

const BlogPost = () => {

    const { id } = useParams();
    const post = blogPosts.filter(post => parseInt(post.id) === parseInt(id))[0];

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Blog</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton text="Blog Posts" />
                    </IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>

                <img src={ post.image } alt="post header" />

                <IonGrid className="ion-padding-start ion-padding-end">
                    <IonRow className="ion-align-items-center ion-justify-content-between">

                        <IonRow className="ion-align-items-center ion-justify-content-between">
                            <img src={ post.authorImage } className="post-author-avatar" alt="post author" />
                            <IonCardSubtitle className="ion-no-margin ion-no-padding ion-margin-start">
                                { post.author }
                            </IonCardSubtitle>
                        </IonRow>
                        <IonNote>{ post.date }</IonNote>
                    </IonRow>

                    <IonRow>
                        <IonCol size="12">
                            <IonCardTitle className="post-title">{ post.title }</IonCardTitle>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="12">
                            <IonText color="medium">
                                { post.content }
                            </IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>
			</IonContent>

            <IonFooter className="view-post-footer">
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
            </IonFooter>
		</IonPage>
	);
};

export default BlogPost;
