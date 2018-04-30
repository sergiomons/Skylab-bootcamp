'use strict';
import React, { Component } from 'react'
import calculin from '../logic/calculin'
import Calculator from '../components/Calculator'

function Calculators() {
    return <div>
        <Calculator operation={'+'} />
        <Calculator operation={'*'} />
        <Calculator operation={'-'} />
    </div>
}
export default Calculators
