import React from 'react';
import { Constants, Svg } from 'expo';
import { View, StyleSheet } from 'react-native';

const {
  G,
  Path,
  Circle
} = Svg;

const HomewoodLogo = ({ width = 60, height = 60 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 100 100">
      <G transform="translate(1 5)" fill="none" fill-rule="evenodd">
        <Circle fill="#4A4A4A" cx="49" cy="45" r="45"/>
        <G stroke-width="2" stroke="#FFF" fill="#FFF">
          <Path d="M56.418 38.207c4.593 4.388 9.73 7.915 15.92 9.642 1.7.473 4.873.74 6.286 1.166-11.12-.426-18.142-3.528-24.61-11.015l-8.16 5.335c10.182 4.637 32.018 7.41 32.362 7.49-1.47.103-3.354.213-4.82.18-9.732-.213-19.144-2.003-28.098-5.914-3.588-1.566-6.952-3.53-9.996-6.005-.53-.43-.94-.486-1.574-.214-8.712 3.723-17.452 7.38-26.468 10.318-2.184.71-4.46 1.144-6.694 1.696-.165.04-.35.005-.566-.138 1.774-.72 3.547-1.442 5.323-2.156C14.75 44.802 24.18 41.023 33.6 37.215c.657-.266 1.098-.177 1.7.193 2.52 1.553 5.086 3.03 7.657 4.5.268.152.755.205 1.004.064 3.336-1.895 9.38-5.763 9.962-5.763.58 0 1.787 1.32 2.496 1.997zM90.698 55.624c-6.764 1.308-13.606 1.865-20.485 1.49-4.295-.234-8.57-.8-12.86-1.153-4.91-.403-9.82-.826-14.74-1.082-8.306-.433-16.588.156-24.862.812-1.613.13-3.22.328-4.873.273 2.057-.4 4.103-.885 6.174-1.188 8.106-1.184 16.266-1.658 24.447-1.433 4.11.113 8.21.61 12.31.946 6.34.52 12.67 1.285 19.02 1.51 5.987.214 11.95-.647 17.88-1.505 1.725-.25 3.445-.53 5.167-.796l.045.31c-2.406.613-4.79 1.346-7.222 1.817z"/>
        </G>
      </G>
    </Svg>
  );
}

export default HomewoodLogo;