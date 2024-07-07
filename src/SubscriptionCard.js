// src/SubscriptionCards.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './index.css';
import AccessDenied from "../src/assets/access-denied.png"

const SubscriptionCards = () => {
  const [modal, setModal] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);

  const tiers = [
    {
      title: 'Tier 0',
      price: 'Free',
      features: [
        '1 listing',
        'No management functions',
        'Manage only their listings and applications'
      ],
      highlight: false
    },
    {
      title: 'Tier 1',
      price: '€89.99/month',
      features: [
        'Unlimited listings',
        'Management of 1-2 properties'
      ],
      highlight: false
    },
    {
      title: 'Tier 2',
      price: '€189.99/month',
      features: [
        'Unlimited listings',
        'Management of 3-9 properties'
      ],
      highlight: true
    },
    {
      title: 'Tier 3',
      price: '€449.99/month',
      features: [
        'Unlimited listings',
        'Management of 10+ properties'
      ],
      highlight: false
    }
  ];

  const toggle = () => setModal(!modal);

  const handleSubscribe = (tier) => {
    setSelectedTier(tier);
    toggle();
  };

  return (
    <Container className="subscription-container">
      <div className="subscription-header">
        <h2>Subscription Plans</h2>
        <p>Choose the best subscription plan according to your need. You can see the subscription plans details below.</p>
      </div>
      <Row className="justify-content-center">
        {tiers.map((tier, index) => (
          <Col md="6" lg="3" className="mb-4" key={index}>
            <Card className={`h-100 shadow-sm ${tier.highlight ? 'highlight-card' : ''}`}>
              <CardBody className="d-flex flex-column">
                <CardTitle tag="h5" className="font-weight-bold">{tier.title}</CardTitle>
                <div className="price mb-3">{tier.price}</div>
                <CardText>
                  <ul className="list-unstyled">
                    {tier.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </CardText>
                <Button className="btn-subscribe mt-auto" onClick={() => handleSubscribe(tier)}>Subscribe</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal isOpen={modal} toggle={toggle} centered className="animated-modal">
        <ModalHeader toggle={toggle}>Access Restricted</ModalHeader>
        <ModalBody className="text-center">
          <p>To Get Access Subscribe Premium!</p>
          <img  src={AccessDenied}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>OK</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default SubscriptionCards;
