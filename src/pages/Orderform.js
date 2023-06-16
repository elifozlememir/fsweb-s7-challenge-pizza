import { NavLink, useLocation,Link} from "react-router-dom";
import axios from "axios";
import logo from './logo.svg'
import { FormGroup, Label, Input }from "reactstrap";
import React, { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Dropdown, Form,Col,FormText,Button,ButtonToolbar,InputGroup, FormLabel } from "react-bootstrap";



export default function Orderform() { 
const location = useLocation();
const navLinks = [
    { path: "/", text: "AnaSayfa" },
    { path: "/Order", text: "Seçenekler" },
    { path: "/Finish", text: "Sipariş Oluştur" }
  ];

const ingredients=[
      "Pepperoni",
      "Domates",
      "Biber",
      "Sosis",
      "Mısır",
      "Sucuk",
      "Kanada Jambonu",
      "Sucuk-2",
      "Ananas",
      "Tavuk Izgara",
      "Jalepeno",
      "Kabak",
      "Soğan",
      "Sarımsak",
      ];

const size=[
    "Küçük",
    "Orta",
    "Büyük"
];

const [pizzas, setPizzas] = useState([]);
const [options, setOptions] = useState([]);
const [pizza, setPizza] = useState({
    size:"",
    thickness:"",
    note:"",
    price:85.50,
    option: "",
    count: 1
});


const handleCheckboxChange = (e) => {
    const { checked, value, type,name,id } = e.target;
  
    if (type === "checkbox") {
        if (checked) {
            if (!options.includes(name)) {
            setOptions([...options, name]);
            
            }
        } else {
            const updatedOptions = options.filter((option) => option !== name);
            setOptions(updatedOptions);
        }
        } 
     else if (type === "radio" ) {
      setPizza({ ...pizza, [name]: id });
    } 

     else {
      setPizza({ ...pizza, [name]: value });
    } 

  };

  useEffect(() => {

    setPizza({...pizza,option:[...options]})
      },[options])
    
      useEffect(() => {
        console.log(pizza); 
        
        },[pizza])
  
  
  const arttır = (e) => {
    const { name } = e.target;
    setPizza({ ...pizza, [name]: pizza.count + 1 });
  }

  const azalt = (e) => {
    const { name } = e.target;
    if (pizza.count >= 1)
    setPizza({ ...pizza, [name]: pizza.count - 1 });
    
    
  }
  
  const formSubmit=(e)=>{
    e.preventDefault();
    
    
    axios.post('https://reqres.in/api/pizzas',pizza)

        .then((response)=>{
            setPizzas([...pizzas,response.data])
            setPizza({
                size:"",
                thickness:"",
                note:"",
                price:85.50,
                option: "",
                count: 1
            })
            console.log(response.data)
        }
        )
    }

  


 

    return (
        <div className="flex flex-col items-center justify-between h-fullscreen ">

            <div class="Header" className=" bg-[#CE2829]   bg-cover bg-center flex flex-col justify-between  items-center h-[20vh] w-[100vw]">
                <div class="header-1" className="flex w-[60vw] h-2/3   justify-center items-center">
                    <img src={logo} alt="Logo" className=" m-5 " />
                </div>
                <div class="header-2" className="flex flex-row flex-1 min-h-fit w-[60vw] pb-2 ">
                    <nav className=" w-[100em] ">
                        {navLinks.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.path}
                                className={`pr-2 text-white ${location.pathname === link.path ? 'font-bold' : ''
                                    }`}
                                    activeclassname="font-bold"
                            >
                                {link.text}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>

            <div class="main-container" className="w-[60%] flex flex-col flex-1 mt-10">

                <div class="about" className="mb-10">
                    <h1 className="mb-3">Position Abosolute Acı Pizza</h1>
                    <span >85.50₺</span>
                    <p className="mt-[10px]">
                        Frontent Dev olarak hala position:
                        absolute kullaniyorsan bu cok ac pizza
                        tam sana göre. Pizza, domates, peynir ve genellikle
                        çesitli diger malzemelerle kaplanmis, daha sonra geleneksel
                        olarak odun atesinde bir firinda yüksek sicaklikta pisirilen,
                        genellikle yuvarlak, düzlestirilmis mayalt bugday bazli hamurdan
                        olusan italyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya
                        bazen pizzetta denir.</p>

                </div>

                <Form id="pizza-form" onSubmit={formSubmit}>
                    <div class="mandotary_section" className="flex flex-row justify-between items-center w-full mb-10">
                        <div class="ms_size" className="flex-inline flex-col w-1/2 " >
                            <FormGroup tag="fieldset" >
                                <legend className="">Boyut Seç <span>*</span></legend>
                                {size.map((item) => {
                                    return (
                                        <FormGroup check>
                                            <Label for={item} check>
                                                <Input type="radio"
                                                    id={item}
                                                    name="size"
                                                    onChange={handleCheckboxChange} />
                                                {item}
                                            </Label>
                                        </FormGroup>
                                    )
                                })}


                            </FormGroup>
                        </div>
                        <div class="ms_thickness" className="flex-inline justify-between grow h-full]">
                            <FormGroup >
                                <Label
                                    for="dough-dropdown"
                                    sm={2}
                                >
                                    <legend>Hamur<span>*</span></legend>
                                </Label>
                                <Col sm={20}>
                                    <Input
                                        id="dough-thickness"
                                        name="thickness"
                                        type="select"
                                        /* placeholder="---Hangi hamur olsun?---" */

                                        onChange={handleCheckboxChange}
                                        data-cy="dough-dropdown"

                                    >
                                        <option value="ince" >
                                            ince
                                        </option>
                                        <option value="orta" >
                                            orta
                                        </option>
                                        <option value="kalın" >
                                            kalın
                                        </option>

                                    </Input>
                                </Col>
                                {/* <FormFeedback>{errors.hamur}</FormFeedback> */}
                            </FormGroup>
                        </div>

                    </div>

                    <div class="options" className="flex flex-1 flex-col ">
                        <legend >Ek Malzemeler</legend>
                        <FormText >En Fazla 10 malzeme seçebilirsiniz. 5₺ </FormText>
                        <div className="grid grid-cols-3 gap-4 mt-3 ">

                            {ingredients.map((item, index) => {
                                return (<div className="flex-inline">
                                    <Input
                                        id={index}
                                        name={item}
                                        type="checkbox"

                                        onChange={handleCheckboxChange}
                                    />
                                    <Label for={String({index})} >{item}</Label></div>
                                )
                            })}



                        </div>
                    </div>
                    <div class="order-note" className="mt-10">
                        <FormGroup>
                            <legend ><Label for="exampleText">
                                Sipariş Notu
                            </Label></legend>
                            <Input
                                id="exampleText"
                                name="note"
                                placeholder="Siparişine eklemek isteğin bir not var mı?"
                                type="textarea"
                                onChange={handleCheckboxChange}
                            />
                            <hr></hr>
                        </FormGroup>
                    </div>




                    <div class="calculate" className="flex flex-row justify-between mb-10">
                        <div class="price" className="flex-inline w-1/2 ">
                            <div className="w-1/3 ">
                                <ButtonGroup className="h-[50px]">
                                    <Button
                                        name="count"
                                        onClick={azalt} >
                                        -
                                    </Button>


                                    <Input className="w-[10em] text-center"
                                        id="count"
                                        type="text"
                                        defaultValue={pizza.count} />


                                    <Button className="bg-[#FDC913] bg-cover text-black"
                                        name="count"
                                        onClick={arttır}>
                                        +
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                        <div class="total" className=" flex flex-col flex-1 border rounded justify-between ">
                            <div class="box" className="pt-5 pl-5 pb-5">
                                <legend htmlFor="basic-url">Sipariş Toplamı</legend>
                                <div class="total-cost">
                                    <label htmlFor="total-cost">Seçimler:</label>
                                    <p id="choices" name="choices" className="inline">{(pizza.option.length * 5)}<span>₺</span></p>
                                </div>
                                <div class="total" className="text-red-50">
                                    <label htmlFor="total" >Toplam:</label>
                                    <p id="total" name="total" className="inline">{pizza.price * pizza.count + pizza.option.length * 5}<span>₺</span></p>
                                </div>

                            </div>
                                <Link to="/Finish">
                            <button className="bg-[#FDC913] text-black rounded h-[50px] w-full px-10 py-2 "
                                type="submit" value="Submit">SIPARIS VER</button>
                                </Link>

                        </div>
                    </div>

                </Form>
            </div>
            <div class="footer" className="bg-[#292929] bg-cover bg-center h-[20vh] w-screen">

            </div>
        </div>
    )
}