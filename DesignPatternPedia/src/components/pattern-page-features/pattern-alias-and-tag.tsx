import React from "react";
import styles from "./pattern-alias-and-tag.module.css";

type Group = "creational" | "behavioral" | "structural";

export type PatternAliasAndTagProps = {
  /** Title of the pattern (required) */
  title: string;
  /** Optional list of alternate names for the pattern */
  aliases?: string[];
  /** Which group this pattern belongs to. If omitted you can use one of the wrapper components below. */
  group?: Group;
  /** Optional override text to show inside the tag (defaults to capitalised group) */
  label?: string;
  className?: string;
};

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function PatternAliasAndTag({
  title,
  aliases,
  group = "creational",
  label,
  className,
}: PatternAliasAndTagProps) {
  const text = label ?? capitalize(group);

  return (
    <div className={`${styles.container} ${className || ""}`}>
      {/* Title row with tag */}
      <div className={styles.titleRow}>
        <span className={styles.title}>{title}</span>
        <span
          aria-label={`pattern-group-${group}`}
          className={`${styles.tag} ${styles[`tag-${group}`]}`}
        >
          {text}
        </span>
      </div>

      {aliases && aliases.length > 0 && (
        <div className={styles.aliasContainer}>
          <span>Also known as</span>
          {aliases.map((alias) => (
            <span key={alias} className={styles.aliasTag}>
              {alias}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// Convenience wrappers so callers don't need to pass `group` every time
export function CreationalPatternTag(
  props: Omit<PatternAliasAndTagProps, "group"> & { title: string }
) {
  return <PatternAliasAndTag {...props} group="creational" />;
}

export function BehavioralPatternTag(
  props: Omit<PatternAliasAndTagProps, "group"> & { title: string }
) {
  return <PatternAliasAndTag {...props} group="behavioral" />;
}

export function StructuralPatternTag(
  props: Omit<PatternAliasAndTagProps, "group"> & { title: string }
) {
  return <PatternAliasAndTag {...props} group="structural" />;
}

export default PatternAliasAndTag;
