declare module "vuetify/lib" {
  import "vuetify/types/lib.d";
  import "vue/types/options.d";
}

declare module "console-subscriber";

declare module "abi-decoder";
declare module "vue-native-notification";

declare module "from-exponential" {
  function fromExponential(string: string): string;
  export = fromExponential;
}
