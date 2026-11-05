"use client";
import { registerUser } from "@/actions/user/register";
import { User } from "@/actions/user/schema/user.schema";
import { useActionState, useState } from "react";
import { Button, Field, FieldGroup, FieldLabel, Input } from ".";
const initialState = {
  success: false,
  message: "",
  errors: {},
};
export function UserForm() {
  const [state, formAction, isPending] = useActionState(
    registerUser,
    initialState,
  );
  const [form, setForm] = useState<User & { confirmPassword: string }>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const enableButton =
    Object.values(form ?? {}).every(
      (value) => value !== "" && value !== undefined,
    ) && form?.password === form?.confirmPassword;
  const changeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName =
      event.target.name === "confirm-password"
        ? "confirmPassword"
        : event.target.name;
    setForm({
      ...form,
      [inputName]: event.target.value,
    });
  };
  return (
    <div>
      <form action={formAction}>
        <FieldGroup className="w-full h-11/12 rounded-b-2xl flex flex-col gap-5 items-center px-9">
          <h1 className="text-2xl font-bold  mt-5 text-center">
            Register User
          </h1>
          <Field>
            <FieldLabel htmlFor="fieldgroup-username">Username</FieldLabel>
            <Input
              id="fieldgroup-username"
              name="name"
              placeholder="John Doe"
              required
              aria-invalid={!!state.errors?.name}
              onChange={changeForm}
            />
            {state.errors?.name && (
              <span className="text-red-500 ml-2">{state.errors.name}</span>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
            <Input
              id="fieldgroup-email"
              type="email"
              placeholder="name@example.com"
              name="email"
              required
              aria-invalid={!!state.errors?.email}
              onChange={changeForm}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
            <Input
              id="fieldgroup-password"
              type="password"
              name="password"
              required
              aria-invalid={!!state.errors?.password}
              onChange={changeForm}
            />
            {state.errors?.password && (
              <span className="text-red-500 text-sm ml-2">
                The password must contain at least 8 and
                {state.errors.password.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </span>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-confirm-password">
              Confirm Password
            </FieldLabel>
            <Input
              id="fieldgroup-confirm-password"
              type="password"
              name="confirm-password"
              required
              aria-invalid={form.confirmPassword !== form.password}
              onChange={changeForm}
            />
          </Field>
          <Field orientation="vertical" className="py-6 w-4/5">
            <Button
              type="submit"
              disabled={isPending || !enableButton}
              className=" mb-5 font-black"
            >
              {isPending ? "Registering..." : "Register"}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
