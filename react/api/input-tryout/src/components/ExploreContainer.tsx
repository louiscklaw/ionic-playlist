import './ExploreContainer.css';
import { IonInput, IonItem, IonLabel, IonList, IonNote } from '@ionic/react';
import React, { useState } from 'react';
import './main.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === '') return;

    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  return (
    <div>
      <div>
        <div>CSS Custom Properties</div>
        <div>
          <IonInput placeholder="Custom input" class="custom"></IonInput>
        </div>
      </div>
      <div>
        <div>Theming</div>
        <div>
          <IonInput color="primary" placeholder="Primary input"></IonInput>
          <IonInput color="secondary" placeholder="Secondary input"></IonInput>
          <IonInput color="tertiary" placeholder="Tertiary input"></IonInput>
          <IonInput color="success" placeholder="Success input"></IonInput>
          <IonInput color="warning" placeholder="Warning input"></IonInput>
          <IonInput color="danger" placeholder="Danger input"></IonInput>
          <IonInput color="light" placeholder="Light input"></IonInput>
          <IonInput color="medium" placeholder="Medium input"></IonInput>
          <IonInput color="dark" placeholder="Dark input"></IonInput>
        </div>
      </div>
      <div>
        <div>Item Counter</div>
        <div>
          <IonItem counter={true}>
            <IonLabel position="floating">Default Counter</IonLabel>
            <IonInput maxlength={20}></IonInput>
          </IonItem>

          <IonItem
            counter={true}
            counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}
          >
            <IonLabel position="floating">Custom Counter Format</IonLabel>
            <IonInput maxlength={20}></IonInput>
          </IonItem>
        </div>
      </div>

      <div>
        <div>Helper & Error Text</div>
        <div>
          <IonItem
            fill="solid"
            className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
          >
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" onIonInput={event => validate(event)} onIonBlur={() => markTouched()}></IonInput>
            <IonNote slot="helper">Enter a valid email</IonNote>
            <IonNote slot="error">Invalid email</IonNote>
          </IonItem>
        </div>
      </div>

      <div>
        <div>Filled Inputs</div>
        <div>
          <IonItem>
            <IonLabel position="floating">Default input</IonLabel>
            <IonInput placeholder="Enter text"></IonInput>
          </IonItem>

          <IonItem fill="solid">
            <IonLabel position="floating">Solid input</IonLabel>
            <IonInput placeholder="Enter text"></IonInput>
          </IonItem>

          <IonItem fill="outline">
            <IonLabel position="floating">Outline input</IonLabel>
            <IonInput placeholder="Enter text"></IonInput>
          </IonItem>
        </div>
      </div>

      <div>
        <div>Clear Options</div>
        <div>
          <IonList>
            <IonItem>
              <IonLabel position="stacked">Input with clear button</IonLabel>
              <IonInput clearInput={true} placeholder="Enter text to see clear button" value="Default value"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Input with clear on edit</IonLabel>
              <IonInput
                clearOnEdit={true}
                placeholder="Enter text, leave the input, come back and type to clear"
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Password input</IonLabel>
              <IonInput
                type="password"
                placeholder="Enter text, leave the input, come back and type to clear"
              ></IonInput>
            </IonItem>
          </IonList>
        </div>
      </div>

      <div>
        <div>Label Positioning</div>
        <div>
          <IonList>
            <IonItem>
              <IonLabel>Default label</IonLabel>
              <IonInput placeholder="Enter text"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="fixed">Fixed label</IonLabel>
              <IonInput placeholder="Enter text"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Stacked label</IonLabel>
              <IonInput placeholder="Enter text"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Floating label</IonLabel>
              <IonInput placeholder="Enter text"></IonInput>
            </IonItem>
          </IonList>
        </div>
      </div>

      <div>
        <div>types</div>
        <div>
          <IonList>
            <IonItem>
              <IonLabel>Text input</IonLabel>
              <IonInput placeholder="Enter text"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Number input</IonLabel>
              <IonInput type="number" placeholder="000"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Password input</IonLabel>
              <IonInput type="password" value="password"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Email input</IonLabel>
              <IonInput type="email" placeholder="email@domain.com"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Telephone input</IonLabel>
              <IonInput type="tel" placeholder="888-888-8888"></IonInput>
            </IonItem>
          </IonList>
        </div>
      </div>
      <div>
        <div>basic</div>
        <div>
          <IonList>
            <IonItem>
              <IonLabel>Default input</IonLabel>
              <IonInput></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Input with placeholder</IonLabel>
              <IonInput placeholder="Enter company name"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Input with value</IonLabel>
              <IonInput value="121 S Pinckney St #300"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Readonly input</IonLabel>
              <IonInput value="Madison" readonly={true}></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Disabled input</IonLabel>
              <IonInput value="53703" disabled={true}></IonInput>
            </IonItem>
          </IonList>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
