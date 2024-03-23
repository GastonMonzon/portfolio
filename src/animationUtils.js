export default function handleAnimation(isInView, ref, firstClassNames, secondClassNames) {
  if (isInView) {
    ref?.current?.classList.add(firstClassNames);
    ref?.current?.classList.remove(secondClassNames);
  } else {
    ref?.current?.classList.add(secondClassNames);
    ref?.current?.classList.remove(firstClassNames);
  }
}