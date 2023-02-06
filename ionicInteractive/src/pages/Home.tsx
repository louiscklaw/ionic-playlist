import {
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonCard,
  IonCardContent,
  IonImg,
  IonText,
  IonContent,
} from "@ionic/react";
import { useState } from "react";

// Import AnimatePresence 👇
import { AnimatePresence, motion } from "framer-motion";
import "./Home.css";

interface Post {
  id: string;
  image: string;
  name: string;
  description: string;
}

const Home: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);

  const posts: Post[] = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      name: "Cruises are sailing again",
      description: "hello description",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1512649408904-c0a00fb810da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80",
      name: "Things to do when visiting Bali",
      description: "hello description",
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80",
      name: "10 Best Islands to travel to in 2022",
      description: "hello description",
    },
  ];

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar mode="ios">
          <IonTitle>Blog Posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="content-container">
          <IonList mode="ios" className="ion-no-padding">
            {posts.map((post, idx) => (
              <IonItem key={"card-" + post.id} mode="ios" lines="none" className="ion-no-padding ion-no-inner-padding">
                <IonCard className="ion-no-padding" onClick={() => setSelectedPost(post)}>
                  <motion.div className="card-content" layoutId={"card-" + post.id}>
                    <motion.div layoutId={"image-container" + post.id}>
                      {/* <IonImg className="card-image" src={post.image} /> */}
                      <div
                        style={{
                          width: "100%",
                          height: "100px",
                          backgroundImage: `url("${post.image}")`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </motion.div>
                    <IonCardContent>
                      <motion.div
                        className="title-container"
                        variants={{
                          show: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
                          hidden: { opacity: 0, transition: { duration: 0.1 } },
                        }}
                        initial="show"
                        animate={selectedPost?.id === post.id ? "hidden" : "show"}
                      >
                        <IonText>
                          {post.name}-{post.id}
                        </IonText>
                      </motion.div>
                    </IonCardContent>
                  </motion.div>
                </IonCard>
              </IonItem>
            ))}
          </IonList>

          <AnimatePresence>
            {selectedPost && (
              <motion.div
                className="popup-container"
                onClick={() => setSelectedPost(undefined)}
                layoutId={"card-" + selectedPost.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div layoutId={"image-container" + selectedPost.id}>
                  {/* <IonImg src={selectedPost.image} /> */}
                  <div
                    style={{
                      width: "100%",
                      height: "300px",
                      backgroundImage: `url("${selectedPost.image}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </motion.div>
                {/* Add fade-in and slide-up animation 👇 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <h1>{selectedPost.name}</h1>
                </motion.div>
                {/* Add fade in and fade out animation with some delay 👇 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <>
                    <p>
                      {selectedPost.id}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
