"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

const VAT_RATE = 0.07; // 7% VAT

export default function VatPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [result, setResult] = useState(null);

  const onSubmit = ({ amount }) => {
    const value = parseFloat(amount);
    if (isNaN(value)) return;

    const vat = value * VAT_RATE;
    const total = value + vat;

    setResult({ amount: value, vat: vat.toFixed(2), total: total.toFixed(2) });
  };

  return (
    <main style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>VAT Calculator</h1>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: "1rem" }}>
        <input
          type="number"
          step="0.01"
          placeholder="Enter amount"
          {...register("amount", { required: "Amount is required" })}
          style={{ padding: "8px" }}
        />
        {errors.amount && <p style={{ color: "red" }}>{errors.amount.message}</p>}

        <button type="submit" style={{ padding: "8px" }}>
          Calculate VAT
        </button>
      </form>

      {result && (
        <section style={{ marginTop: "1rem" }}>
          <p>Amount: {result.amount}</p>
          <p>VAT (7%): {result.vat}</p>
          <p>Total: {result.total}</p>
        </section>
      )}
    </main>
  );
}

