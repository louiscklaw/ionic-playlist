import './ExploreContainer.css';
import React from 'react';
import { IonCol, IonGrid, IonInput, IonRow } from '@ionic/react';

import './main.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div>
      <div>https://ionicframework.com/docs/api/grid</div>

      <div>
        <div>padding</div>
        <div>
          <IonGrid>
            <IonRow>
              <IonCol>1</IonCol>
              <IonCol>2</IonCol>
              <IonCol>3</IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </div>

      <div>
        <div>Horizontal alignment</div>
        <div>
          <b>Columns aligned at the start</b>
          <IonGrid>
            <IonRow class="ion-justify-content-start">
              <IonCol size="3">1</IonCol>
              <IonCol size="3">2</IonCol>
            </IonRow>
          </IonGrid>

          <b>Columns aligned at the center</b>
          <IonGrid>
            <IonRow class="ion-justify-content-center">
              <IonCol size="3">1</IonCol>
              <IonCol size="3">2</IonCol>
            </IonRow>
          </IonGrid>

          <b>Columns aligned at the end</b>
          <IonGrid>
            <IonRow class="ion-justify-content-end">
              <IonCol size="3">1</IonCol>
              <IonCol size="3">2</IonCol>
            </IonRow>
          </IonGrid>

          <b>Columns aligned with space around</b>
          <IonGrid>
            <IonRow class="ion-justify-content-around">
              <IonCol size="3">1</IonCol>
              <IonCol size="3">2</IonCol>
            </IonRow>
          </IonGrid>

          <b>Columns aligned with space between</b>
          <IonGrid>
            <IonRow class="ion-justify-content-between">
              <IonCol size="3">1</IonCol>
              <IonCol size="3">2</IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </div>

      <div>
        <div>vertical alignment</div>
        <div>
          <b>Columns aligned at the top</b>
          <IonGrid>
            <IonRow class="ion-align-items-start">
              <IonCol>1</IonCol>
              <IonCol>2</IonCol>
              <IonCol>3</IonCol>
              <IonCol>
                4 <br />
                # <br />
                # <br />
                # <br />
              </IonCol>
            </IonRow>
          </IonGrid>

          <b>Columns aligned at the center</b>
          <IonGrid>
            <IonRow class="ion-align-items-center">
              <IonCol>1</IonCol>
              <IonCol>2</IonCol>
              <IonCol>3</IonCol>
              <IonCol>
                4 <br />
                # <br />
                # <br />
                # <br />
              </IonCol>
            </IonRow>
          </IonGrid>

          <b>Columns aligned at the bottom</b>
          <IonGrid>
            <IonRow class="ion-align-items-end">
              <IonCol>1</IonCol>
              <IonCol>2</IonCol>
              <IonCol>3</IonCol>
              <IonCol>
                4 <br />
                # <br />
                # <br />
                # <br />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </div>

      <div>
        <div>Responsive size</div>
        <div>
          <b>Stacked for xs breakpoint, equal width for sm and up</b>
          <IonGrid>
            <IonRow>
              <IonCol size="12" size-sm="3">
                1
              </IonCol>
              <IonCol size="12" size-sm="3">
                2
              </IonCol>
              <IonCol size="12" size-sm="3">
                3
              </IonCol>
              <IonCol size="12" size-sm="3">
                4
              </IonCol>
            </IonRow>
          </IonGrid>

          <b>Equal width until md breakpoint, last column takes full width for md and up</b>
          <IonGrid>
            <IonRow>
              <IonCol size-md="6">1</IonCol>
              <IonCol size-md="6">2</IonCol>
              <IonCol size-md="12">3</IonCol>
            </IonRow>
          </IonGrid>

          <b>2 per row until md breakpoint, 3 per row for md, equal width for lg and up</b>
          <IonGrid>
            <IonRow>
              <IonCol size="6" size-md="4" size-lg="2">
                1
              </IonCol>
              <IonCol size="6" size-md="4" size-lg="2">
                2
              </IonCol>
              <IonCol size="6" size-md="4" size-lg="2">
                3
              </IonCol>
              <IonCol size="6" size-md="4" size-lg="2">
                4
              </IonCol>
              <IonCol size="6" size-md="4" size-lg="2">
                5
              </IonCol>
              <IonCol size="6" size-md="4" size-lg="2">
                6
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </div>

      <div>
        <div>Specified size</div>
        <div>
          <b>
            Column 2 has <code>size</code> set to <code>"8"</code>
          </b>
          <IonGrid>
            <IonRow>
              <IonCol>1</IonCol>
              <IonCol size="8">2</IonCol>
              <IonCol>3</IonCol>
            </IonRow>
          </IonGrid>

          <b>
            Columns 3 & 4 have <code>size</code> set to <code>"3"</code>
          </b>
          <IonGrid>
            <IonRow>
              <IonCol>1</IonCol>
              <IonCol>2</IonCol>
              <IonCol size="3">3</IonCol>
              <IonCol size="3">4</IonCol>
              <IonCol>5</IonCol>
              <IonCol>6</IonCol>
            </IonRow>
          </IonGrid>

          <b>
            Columns 1 & 2 have <code>size</code> set to <code>"4"</code>
          </b>
          <IonGrid>
            <IonRow>
              <IonCol size="4">1</IonCol>
              <IonCol size="4">2</IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </div>

      <div>
        <div>Column Size</div>
        <div>
          <b>
            Column 1 has <code>size</code> set to <code>"auto"</code>
          </b>
          <IonGrid>
            <IonRow>
              <IonCol size="auto">1</IonCol>
              <IonCol>2</IonCol>
              <IonCol>3</IonCol>
            </IonRow>
          </IonGrid>

          <b>
            Column 3 contains an input and has <code>size</code> set to <code>"auto"</code>
          </b>
          <IonGrid>
            <IonRow>
              <IonCol>1</IonCol>
              <IonCol>2</IonCol>
              <IonCol size="auto">
                <IonInput placeholder="3"></IonInput>
              </IonCol>
              <IonCol>4</IonCol>
              <IonCol>5</IonCol>
              <IonCol>6</IonCol>
            </IonRow>
          </IonGrid>

          <b>
            Column 2 has <code>size</code> set to <code>"auto"</code> and a defined width
          </b>
          <IonGrid>
            <IonRow>
              <IonCol>1</IonCol>
              <IonCol size="auto">
                <div style={{ width: '150px' }}>2</div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </div>
      <div>
        <div>Fixed Grid</div>
        <div>
          <IonGrid fixed={true}>
            <IonRow>
              <IonCol>1</IonCol>
              <IonCol>2</IonCol>
              <IonCol>3</IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </div>
      <div>
        <div>Basic Usage</div>
        <div>
          <IonGrid>
            <IonRow>
              <IonCol>1</IonCol>
              <IonCol>2</IonCol>
              <IonCol>3</IonCol>
            </IonRow>
          </IonGrid>
          <IonGrid>
            <IonRow>
              <IonCol>1</IonCol>
              <IonCol>2</IonCol>
              <IonCol>3</IonCol>
              <IonCol>4</IonCol>
              <IonCol>5</IonCol>
              <IonCol>6</IonCol>
            </IonRow>
          </IonGrid>
          <IonGrid>
            <IonRow>
              <IonCol>1</IonCol>
              <IonCol>2</IonCol>
              <IonCol>3</IonCol>
              <IonCol>4</IonCol>
              <IonCol>5</IonCol>
              <IonCol>6</IonCol>
              <IonCol>7</IonCol>
              <IonCol>8</IonCol>
              <IonCol>9</IonCol>
              <IonCol>10</IonCol>
              <IonCol>11</IonCol>
              <IonCol>12</IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
