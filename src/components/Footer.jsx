const Footer = () => {
  return (
    <>
     <div className="flex md:flex-row-reverse md:justify-between items-center flex-col px-10 h-30">
        <div className="flex md:flex-row flex-col md:gap-2 items-center justify-center">
          <p className="text-center text-sm">Got a question ?</p>
          <a
            href="mailto:essienabasiama11@gmail.com"
            className="text-sm text-center font-semibold text-indigo-500"
          >
            hello@kingx.com
          </a>
        </div>
        <div className="flex justify-center items-center pt-3 text-center font-light text-sm gap-0.5">
          <span>Made with</span>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE2UlEQVR4nO2XbUwTdxzHf1fa0nJXaKHHFSrlqVJFoGoptgVB4qZB41NbIWNZnMs02Zu92LLFZFl84yvdnNski5ItTKcuJm6a+LRRxUUjPgxwU4mi0wlxm47gCfdgr+BvuS3bC6e2QJEz6Sf5JJfLP998f3f/+ycHkCBBggQJEsQI1jTkYXXju8O+YGjEG7w+Uln/+4gvcHnYF/wWaxpfxZpVxqgZ81/JwJqXXx+pXLl/xBe8+k9GsHvEFziG1Y1vY21DIcSbB1UNRWHviuOSLyBIU8sfRGgbSlQ6SnoKpVQzSkwBStOrhiRfkI/4Ak3oW2r4X/GqRlPEF9gmVa4UwtOruAiTj5Ih47+MiDkHw1PdouT185IncPRBzUvT4lJe9AXWiB4/L2QXDYdVKgwDPFmtDkW7WxA9/ru8t979b4ZQVV8pePwDYqFLDGuSn56hSkLB6hgWPH5e9AZXj6s8N2fF+9zsRZygo1AEiFnBlIVDFcu5Qa+/esgbmM9VLOcEo2V0GXoDcq5FHOde/t6Yyt+bsyzAzqrjBY0OBTlwlHKpNLLuJSxbvmSQM2SMKUPQ6JB11fH33EtXjKo861mZ3u9azA6SJuTkMmP0Pp0bYc05w+PJGCRNKHf58zHf1RO5M3vxhv48pzgoByjA/gIXf2d23YaYyiOsV912LmQHdBSyAIrwnt6At50v3o1pgL6ZC5x9xfMGBwBQSfbOqB3qLa0rjTrA9ZIFq3ttZUP98qtTkL25M+/fKFvQEHWAnpIX1vUy9shdAFSStyxF4Wsl89+KOkB3ce26m5kFkT8AUEneYOzh7uJ50Qe4NK16bY/Fwf8GgEqyJ3v60KVpc1dFHeCCY+7CizlOtg8AleRF2yy2y1FdG3WArtwaY0ehJ/wrEHhL3ntKkCBQ7nTGXpEKsXA2r/x6jz4VbwIowqv6NDyfV94NsXI6r/ydTnOB8AsAKsFOupBvz3O/GfMAofw5zEnbTP5qkgavAUyqV9RaPGmbxbVmuzNgNJywln161jRFvCKHTKLt6TbxhNW5CUaLPHEoq4Tt0qbgZYBJsUtLYmtW6UBbrjPqr+pjOcrMaGili7ifCBVelI+yZ+jPRBJ+Tzu4I1mly2A8HMp0tISMOdwFAHxWdgFgyGTjDzKOZhgvh+325AP01I6QwSJ2yifCBNsBgK0Gi3DAXHRmG7g0EA92MGXkvnT7j0coRjwHgOcn0O+oTGFfemHnXrqYgniyP8Nh2GvKv3CINIvtAHgmzrYD4EGSFvea8jvkBwYTwc50e+qetNxz35AMf4pQ4WmAuHiKUOE+kuF3p9na4/7kH6UNQP0VZduyi7Lyx1UaPAkwLttUatxNWbkdlK0lbns+Floo69ovyWz+sFr/8AcAHIuH1PqHLaSV/8Iw5TWYDJr1UyqaUyy3v0428seAwOMAMRkiCNyTbBQ/T7H0NadkuWAy2Qo0tV2fuadZZ+YOqjTYKh+DT1Fes11Hc58l0zt3ADMxH+tY2Kox1zdpzfd3qcnwUfk4fET53m41KclrmrS0H5TIZjBnfaIxtTWp07j9RBIeBvhb+Vq+t0Vtat0CmQwonQ9Upjc+TDLyuwjtQ9nNSUbhI5VpDTxPbARj2UbC0LeJMNzaBGQJPI+sB9B9DJA82T0SJEgAyuUvGpheeavdrJAAAAAASUVORK5CYII="
            alt="heart"
            className="w-5 h-5"
          />
          <span>by me</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
