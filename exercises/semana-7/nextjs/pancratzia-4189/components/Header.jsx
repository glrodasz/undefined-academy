import React from 'react'
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

export default function Header() {
  
    return (
        <div className="bg-dark text-secondary px-4 py-5 text-center mb-4">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">PANCRADogs</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">Aplicación realizada con el uso de Dog API y Next.js</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

              <PrimaryButton href="https://nextjs.org/" >Next.js</PrimaryButton>
              <SecondaryButton href="https://dog.ceo/dog-api/">Dog API</SecondaryButton>
              
            </div>
          </div>
        </div>
      </div>
    );
  
}

