import React, { Component } from 'react';
import  { Carousel, CarouselInner, CarouselItem, View, Container } from 'mdbreact';
import "./Carousel2.css";



class CarouselPage extends Component {
  render(){
    return(
      <Container>
        <h4 className="mt-5 mb-2">Discography</h4>
        <Carousel
          activeItem={1}
          length={9}
          showControls={true}
          showIndicators={false}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="image" src="./assets/ecliptica.jpg" alt="First slide"  />
              </View>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="image" src="./assets/silence.jpg" alt="Second slide" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="image" src="./assets/winterheart.jpg" alt="Third slide" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="image" src="./assets/reckoning.jpg" alt="Fourth slide" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="5">
              <View>
                <img className="image" src="./assets/unia.jpg" alt="Fifth slide" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="6">
              <View>
                <img className="image" src="./assets/days.jpg" alt="Sixth slide" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="7">
              <View>
                <img className="image" src="./assets/stones.jpg" alt="Seventh slide" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="8">
              <View>
                <img className="image" src="./assets/child.jpg" alt="Eighth slide" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="9">
              <View>
                <img className="image" src="./assets/ninth.jpg" alt="Ninth slide" />
              </View>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
}

export default CarouselPage;