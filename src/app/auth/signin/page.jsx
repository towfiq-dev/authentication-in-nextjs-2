"use client";
import React, { useState } from 'react';
import {Check, Envelope, Eye, EyeSlash} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, InputGroup, Label, TextField} from "@heroui/react";


const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);
    
    const onSubmit = async(e) => {
    e.preventDefault()
    
    
  };
  
    return (
      <div className='grid justify-center mt-10'>
        <h1 className='text-center text-2xl font-semi-bold'>Sign In your Account</h1>
        <Form className="flex w-96 flex-col gap-4 mt-5" onSubmit={onSubmit}>
      {/* email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          {/* emailInput */}
          <Label>Email address</Label>
          <InputGroup variant="secondary">
            <InputGroup.Prefix>
              <Envelope className="size-4 text-muted" />
            </InputGroup.Prefix>
            <InputGroup.Input className="w-full max-w-[330px]" placeholder="Enter your email address" />
          </InputGroup>
          <Description>Well never share this with anyone else</Description>
          <FieldError />
        </TextField>
        {/* password */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          {/* inputFeild */}
          <InputGroup>
          <InputGroup.Input
            placeholder='*********'
            className="w-full max-w-[330px]"
            type={isVisible ? "text" : "password"}
            name='password'
            //value={isVisible ? "87$2h.3diua" : "••••••••"}
          />
          <InputGroup.Suffix className="pr-0">
            <Button
              isIconOnly
              aria-label={isVisible ? "Hide password" : "Show password"}
              size="sm"
              variant="ghost"
              onPress={() => setIsVisible(!isVisible)}
            >
              {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
            </Button>
          </InputGroup.Suffix>
        </InputGroup>
          <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
          <FieldError />
        </TextField>
        <div className="flex gap-5 justify-center mb-5">
          <Button type="submit" className='w-26'>
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary" className='w-26'>
            Reset
          </Button>
        </div>
      </Form>
      </div>
    );
};

export default SignInPage;