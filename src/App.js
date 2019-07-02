import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Card, CardItem, Text, Grid, Col, Icon, Row } from 'native-base';
import { material, systemWeights, materialColors } from 'react-native-typography';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Recent notifications</Text>
            </CardItem>
            <CardItem bordered>
              <Grid>
                <Col style={styles.appIcon}>
                  <Image source={require('./assets/fb.jpg')} style={styles.appIconImage} />
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
                  <Image source={require('./assets/fb.jpg')} style={styles.appIconImage} />
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
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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
