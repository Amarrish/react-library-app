import React from 'react'
import "./Page.css"

import Card from 'react-bootstrap/Card';
import Cardimg from './pageimages/8b704f5e6a201423a676c96f8937d3c6.gif';
import imgedit from './pageimages/images.png'
import imgadd from './pageimages/2a64a0ebe6cf1ee2ac27878f920e46b2.gif'
import imgremove from './pageimages/book-75.gif'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Landingpage = () => {
  return (
    <>
    <div>
        <div><h1>Welcome to Read Me</h1></div>
        <div><p className='paragraphs' >Reading is a profoundly important activity that encompasses a multitude of benefits, both intellectual and personal. At its core, reading is an unparalleled source of knowledge acquisition. It provides a gateway to information and insights on a vast array of topics, enabling individuals to make informed decisions and engage in informed conversations. This continuous pursuit of knowledge is instrumental in personal growth and development.

Moreover, reading is an exercise for the mind. It stimulates cognitive functions, fostering creativity, imagination, and critical thinking. It keeps the brain active and can help prevent cognitive decline, ultimately enhancing mental agility and acuity. Additionally, the act of reading leads to an expansion of one's vocabulary, exposing readers to new words, phrases, and expressions. This natural language development, in turn, bolsters communication skills and written expression.

Reading is also a respite in a fast-paced world. It provides mental relaxation and stress reduction, offering a tranquil escape into the worlds of books and literature. Immersing oneself in the narratives and stories created by authors has a calming effect and contributes to overall well-being. This sense of escapism has therapeutic value.

Furthermore, reading promotes empathy and a deeper understanding of the human experience. Especially when delving into fiction, readers can inhabit the minds of characters, comprehend their emotions, and gain insights into diverse perspectives. It fosters a sense of connection to others and promotes tolerance and compassion.

Beyond the personal benefits, reading has practical advantages as well. It enhances focus and concentration, a valuable skill in our age of constant distractions. The practice also contributes to better writing skills, with exposure to well-structured content, diverse writing styles, and grammatical correctness.

In essence, reading serves as a gateway to a world of knowledge, imagination, and personal growth. It is a powerful tool for improving mental faculties, broadening horizons, and cultivating a lifelong learning mindset. Whether for entertainment, education, or personal development, reading stands as an invaluable and enriching endeavor that contributes to a richer, more informed, and more fulfilling life.</p></div>

<div><h3>Lets Start Your Habbit from Here...</h3></div>

<div className='d-flex align-items-center justify-content-between'>
<Row>
        <Col xs={12} md={6} lg={4} xl={4}>
        <Card className='align-items-center' >
      <Card.Img style={{width:'300px', height:'200px'}} variant="top" src={Cardimg} />
      <Card.Body>
        <Card.Title>Add New Book</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </Col>




        <Col xs={12} md={6} lg={4} xl={4}>
        <Card  className='align-items-center'>
      <Card.Img style={{width:'300px', height:'200px'}} variant="top" src={imgadd} />
      <Card.Body>
        <Card.Title>Buy/Sell</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </Col>



        <Col xs={12} md={6} lg={4} xl={4}>
        <Card  className='align-items-center'>
      <Card.Img style={{width:'300px', height:'200px'}} variant="top" src={imgedit} />
      <Card.Body>
        <Card.Title>Edit Details</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>


        <Col xs={12} md={6} lg={4} xl={4}>
        <Card  className='align-items-center'>
      <Card.Img style={{width:'300px', height:'200px'}} variant="top" src={imgremove} />
      <Card.Body>
        <Card.Title>Remove Books</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </Col>
      </Row>
</div>

    </div>
    </>
  )
}

export default Landingpage