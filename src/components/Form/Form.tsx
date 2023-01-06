import styles from "./Form.module.scss";

export function Form() {
  return (
    <div className={styles.category}>
      <div>Categories:</div>
      <select>
        <option>Interaction Design</option>
        <option>Interaction Design</option>
        <option>Interaction Design</option>
        <option>Interaction Design</option>
      </select>
    </div>
  );
}

export function Input() {
  return (
    <div className={styles.form_control}>
      <label>Name*</label>
      <input type="text" placeholder="Walter Moss" />
    </div>
  );
}

export function TextArea() {
  return (
    <div className={styles.form_control}>
      <label>Comment*</label>
      <textarea>Hi there...</textarea>
    </div>
  );
}
