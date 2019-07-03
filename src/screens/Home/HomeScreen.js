import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Content, Card, CardItem, Text, Grid, Col, Icon, Row } from 'native-base';
import { material, systemWeights, materialColors } from 'react-native-typography';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home'
  }

  render() {
    return (
      <Content padder>
        <Card>
          <CardItem header bordered style={styles.header}>
            <Text style={styles.title}>Recent notifications</Text>
            <Text style={styles.clearAllButton}>Clear all</Text>
          </CardItem>
          <CardItem bordered>
            <Grid>
              <Col style={styles.appIcon}>
                <Image source={require('./../../assets/fb.jpg')} style={styles.appIconImage} />
              </Col>
              <Col style={styles.notificationDetails}>
                <Row>
                  <Col style={styles.appName}>
                    <Text style={styles.appNameText}>Facebook Messenger</Text>
                  </Col>
                  <Col style={styles.notificationTime}>
                    <Text style={styles.notificationTimeText}>06:07am</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text style={styles.notificationTitle}>Nola Harrell</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text style={styles.notificationDescription}>Commented on your post "What a lovely Chair!"</Text>
                  </Col>
                </Row>
              </Col>
              <Col style={styles.actions}>
                <Icon type="MaterialCommunityIcons" name="close" style={styles.actionIcon} />
              </Col>
            </Grid>
          </CardItem>
          <CardItem bordered>
            <Grid>
              <Col style={styles.appIcon}>
                <Image source={require('./../../assets/fb.jpg')} style={styles.appIconImage} />
              </Col>
              <Col style={styles.notificationDetails}>
                <Row>
                  <Col style={styles.appName}>
                    <Text style={styles.appNameText}>Facebook Messenger</Text>
                  </Col>
                  <Col style={styles.notificationTime}>
                    <Text style={styles.notificationTimeText}>06:07am</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text style={styles.notificationTitle}>Nola Harrell</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text style={styles.notificationDescription}>Commented on your post "What a lovely Chair!"</Text>
                  </Col>
                </Row>
              </Col>
              <Col style={styles.actions}>
                <Icon type="MaterialCommunityIcons" name="close" style={styles.actionIcon} />
              </Col>
            </Grid>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    ...material.headline
  },
  clearAllButton: {
    color: '#42a5f5'
  },
  appIcon: {
    width: 'auto',
    marginTop: 2
  },
  appIconImage: {
    width: 48,
    height: 48
  },
  appName: {
    width: 'auto'
  },
  appNameText: {
    ...material.subheadingObject,
    ...systemWeights.bold
  },
  notificationDetails: {
    marginLeft: 10
  },
  notificationTitle: {
    ...material.subheadingObject,
    ...systemWeights.semibold,
  },
  notificationDescription: {
    ...material.subheadingObject,
    ...systemWeights.regular
  },
  actions: {
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  actionIcon: {
    color: materialColors.blackTertiary
  },
  notificationTime: {
    marginLeft: 20,
    display: 'flex',
    justifyContent: 'center'
  },
  notificationTimeText: {
    ...material.captionObject
  }
});