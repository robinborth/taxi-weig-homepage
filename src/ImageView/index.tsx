import React from 'react';
import {
    Container,
    Image,
    ImageColumn,
    ImageRow
} from './styles';
import Employee01 from '../assets/employees/employee_01.jpeg';
import Employee02 from '../assets/employees/employee_02.jpeg';
import Employee03 from '../assets/employees/employee_03.jpeg';
import Employee04 from '../assets/employees/employee_04.jpeg';
import Employee05 from '../assets/employees/employee_05.jpeg';
import Employee06 from '../assets/employees/employee_06.jpeg';
import Employee07 from '../assets/employees/employee_07.jpeg';
import Employee08 from '../assets/employees/employee_08.jpeg';
import Employee09 from '../assets/employees/employee_09.jpeg';
import Employee10 from '../assets/employees/employee_10.jpeg';
import Employee11 from '../assets/employees/employee_11.jpeg';
import Employee12 from '../assets/employees/employee_12.jpeg';
import Employee13 from '../assets/employees/employee_13.jpeg';
import Employee14 from '../assets/employees/employee_14.jpeg';

const ImageView = () => {
    return (
        <Container>
            <ImageRow>
                <ImageColumn>
                    <Image src={Employee01}/>
                    <Image src={Employee02}/>

                    <Image src={Employee07}/>
                </ImageColumn>
                <ImageColumn>
                    <Image src={Employee04}/>
                    <Image src={Employee12}/>
                    <Image src={Employee05}/>
                    <Image src={Employee03}/>

                </ImageColumn>
                <ImageColumn>
                    <Image src={Employee08}/>
                    <Image src={Employee09}/>
                    <Image src={Employee10}/>
                    <Image src={Employee11}/>

                </ImageColumn>
                <ImageColumn>
                    <Image src={Employee06}/>
                    <Image src={Employee13}/>
                    <Image src={Employee14}/>
                </ImageColumn>
            </ImageRow>
        </Container>
    )
}

export default ImageView