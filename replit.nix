{ pkgs }: {
    deps = [
        pkgs.ffmpeg
        pkgs.git
        pkgs.nodejs-18_x
        pkgs.nodePackages.typescript
        pkgs.libwebp
        pkgs.libuuid
        pkgs.imagemagick
        pkgs.pm2
        pkgs.wget
        pkgs.yarn
    ];
  env ={
    LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [pkgs.libuuid];
  };
}