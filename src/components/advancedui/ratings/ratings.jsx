import React,  { Fragment } from 'react';
import { Box, Rating, styled } from '@mui/material';
import {  Card, Col, Row } from 'react-bootstrap';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarRateIcon from '@mui/icons-material/StarRate';
import Stack from '@mui/material/Stack';
import StarsIcon from '@mui/icons-material/Stars';
import Pageheader from '../../../layout/layoutcomponent/pageheader';

const Ratings = () => {
  const StyledRating = styled(Rating)({ color: "#F1C40F" });
  const StyledStarRating = styled(Rating)({ color: "#E74C3C" });
  const StyledheartRating = styled(Rating)({ color: "#E74C3C" });
  const onChange = (value) => {
    window.alert(`rating is ${value}`);
  };
  return (
    <Fragment>
         <Pageheader title="RATINGS"  heading="Advanced UI"   active="Ratings" />

    
      <Row className="row-cards">
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title className='tx-14'>Star Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block" id="rating-1" data-stars="2">
                <div className="rating-stars block">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating name="no-value" size="large" value={3} max={5} />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title className='tx-14'>Heart Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block" id="rating-2" data-stars="2">
                <div className="rating-stars block">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <StyledRating
                      name="customized-color"
                      defaultValue={2}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title className='tx-14'>Multi Star Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block" id="rating-3" data-stars="2">
                <div className="rating-stars block">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <StyledStarRating name="no-value" size="large" value={3} max={10} />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title className='tx-14'>Multi Heart Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block" id="rating-6" data-stars="2">
                <div className="rating-stars block">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <StyledheartRating
                      name="no-value"
                      size="large"
                      value={3}
                      max={10}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title className='tx-14'>Thumbs-up Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block" id="rating-5" data-stars="2">
                <div className="rating-stars block">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating
                      name="no-value"
                      size="large"
                      value={3}
                      max={5}
                      icon={<ThumbUpIcon fontSize="inherit" />}
                      emptyIcon={<ThumbUpIcon fontSize="inherit" />}
                    />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title className='tx-14'>Basic Star Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block my-rating">
                <Stack spacing={1} className="rating-stars block my-rating ratingcenter">
                  <Rating
                    name="half-rating"
                    value={3}
                    precision={0.5}
                    size="large"
                    icon={<StarRateIcon fontSize="inherit" />}
                    emptyIcon={<StarRateIcon fontSize="inherit" />}
                  />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title className='tx-14'>Rounded star Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block my-rating-4" data-stars="2">
                <Stack spacing={1} className="rating-stars  block my-rating-4 ratingcenter">
                  <Rating
                    name="half-rating"
                    value={3}
                    precision={0.5}
                    size="large"
                    icon={<StarsIcon fontSize="inherit" />}
                    emptyIcon={<StarsIcon fontSize="inherit" />}
                  />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title className='tx-14'>gradients Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block my-rating-5" data-stars="2">
                <Stack spacing={1} className="rating-stars block my-rating-5 ratingcenter">
                  <Rating
                    name="half-rating"
                    value={3}
                    precision={0.5}
                    size="large"
                    icon={<StarRateIcon fontSize="inherit" />}
                    emptyIcon={<StarRateIcon fontSize="inherit" />}
                  />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title className='tx-14'>Execute callback when rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block my-rating-6" data-stars="2">
                <Stack spacing={1} className="rating-stars block my-rating-6 ratingcenter">
                  <Rating
                    name="half-rating"
                    value={3}
                    precision={0.5}
                    size="large"
                    onChange={onChange}
                    icon={<StarRateIcon fontSize="inherit" />}
                    emptyIcon={<StarRateIcon fontSize="inherit" />}
                  />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title className='tx-14'>read only mode</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block my-rating-7" data-stars="2">
                <Stack spacing={1} className="rating-stars block my-rating-7 ratingcenter">
                  <Rating name="half-rating-read" value={3} max={5} size="large" readOnly />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title className='tx-14'>Use fullstars</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block my-rating-8" data-stars="2">
                <div className="rating-stars block">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating name="no-value" size="large" max={5} />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      
    </Fragment>
  );
}

Ratings.propTypes = {};

Ratings.defaultProps = {};

export default Ratings;
