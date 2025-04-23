findDirInParentDirs() {
  local dirToSearchFrom="$2"
  local dirPath="$dirToSearchFrom/$1"
  if [ -d "$dirPath" ]; then
    echo "$dirPath"
  elif [ "$dirToSearchFrom" != '/' ]; then
    findDirInParentDirs "$1" "$(dirname "$dirToSearchFrom")"
  else
    return 1
  fi
}

