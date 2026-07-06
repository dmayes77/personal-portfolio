"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import styles from "./contact.module.css";

const initialState = {
  status: "idle",
  message: "",
};

const initialFields = {
  name: "",
  email: "",
  reason: "",
  message: "",
  website: "",
};

function SubmitButton() {
  return (
    <Button type="submit" className={styles.submit}>
      Send message
    </Button>
  );
}

function getSuccessDetail(reason) {
  const messages = {
    "full-time-opportunity":
      "I appreciate you reaching out about a full-time opportunity. I will review the details and follow up as soon as I can.",
    "contract-project":
      "Thanks for reaching out about a contract or freelance project. I will take a look and get back to you if it looks like a strong fit.",
    "general-question":
      "Thanks for the note. I will read through your question and reply as soon as I can.",
    other:
      "Thanks for reaching out. I will review your message and respond as soon as I can.",
  };

  return messages[reason] || messages.other;
}

export default function ContactForm({ action }) {
  const formRef = useRef(null);
  const [state, formAction] = useActionState(action, initialState);
  const [hideSuccess, setHideSuccess] = useState(false);
  const [fields, setFields] = useState(initialFields);
  const successVisible = state.status === "success" && !hideSuccess;
  const successDetail = getSuccessDetail(fields.reason);

  useEffect(() => {
    if (!successVisible) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setFields(initialFields);
      setHideSuccess(true);
    }, 7000);

    return () => window.clearTimeout(timeoutId);
  }, [successVisible]);

  useEffect(() => {
    if (!successVisible) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setFields(initialFields);
        setHideSuccess(true);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [successVisible]);

  const feedback =
    state.status === "success" && hideSuccess ? initialState : state;

  return (
    <>
      {successVisible ? (
        <div
          className={styles.backdrop}
          role="presentation"
          onClick={() => {
            setFields(initialFields);
            setHideSuccess(true);
          }}
        >
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.close}
              aria-label="Close thank you message"
              onClick={() => {
                setFields(initialFields);
                setHideSuccess(true);
              }}
            >
              <Icon name="close" />
            </button>

            <div className={styles.copy}>
              <p className={styles.eyebrow}>Message Sent</p>
              <h2 id="contact-success-title">Thanks for your submission.</h2>
              <p>{successDetail}</p>
            </div>

            <div className={styles.actions}>
              <Button
                type="button"
                onClick={() => {
                  setFields(initialFields);
                  setHideSuccess(true);
                }}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      <form
        ref={formRef}
        action={formAction}
        className={styles.form}
        onSubmit={() => setHideSuccess(false)}
      >
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={fields.name}
          onChange={(event) =>
            setFields((current) => ({ ...current, name: event.target.value }))
          }
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={fields.email}
          onChange={(event) =>
            setFields((current) => ({ ...current, email: event.target.value }))
          }
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="reason">Reason for contact</label>
        <select
          id="reason"
          name="reason"
          value={fields.reason}
          onChange={(event) =>
            setFields((current) => ({ ...current, reason: event.target.value }))
          }
          required
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="full-time-opportunity">Full-time opportunity</option>
          <option value="contract-project">Contract / freelance project</option>
          <option value="general-question">General question</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={fields.message}
          onChange={(event) =>
            setFields((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
          required
        />
      </div>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={(event) =>
            setFields((current) => ({ ...current, website: event.target.value }))
          }
        />
      </div>

        {feedback.status === "error" && feedback.message ? (
          <p role="alert" className={styles.formError}>
            {feedback.message}
          </p>
        ) : null}

        <SubmitButton />
      </form>
    </>
  );
}
