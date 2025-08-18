declare module 'libsignal' {
  // Minimal surface needed by this codebase. Extend if you need stricter types.
  export class ProtocolAddress {
    constructor(name: string, deviceId: number)
  }

  export class SessionRecord {
    static deserialize(data: Uint8Array | Buffer): SessionRecord
    serialize(): Uint8Array
  }

  export class SessionCipher {
    constructor(storage: any, address: any)
    encrypt(data: Uint8Array | string): Promise<{ type: number; body: ArrayBuffer | Uint8Array }>
    decryptPreKeyWhisperMessage(ciphertext: Uint8Array | Buffer): Promise<Buffer>
    decryptWhisperMessage(ciphertext: Uint8Array | Buffer): Promise<Buffer>
  }

  export class SessionBuilder {
    constructor(storage: any, address: any)
    initOutgoing(session: any): Promise<void>
  }

  export const curve: {
    generateKeyPair(): { pubKey: Uint8Array; privKey: Uint8Array }
    calculateAgreement(publicKey: Uint8Array, privateKey: Uint8Array): Uint8Array
    calculateSignature(privateKey: Uint8Array, message: Uint8Array): Uint8Array
    verifySignature(publicKey: Uint8Array, message: Uint8Array, signature: Uint8Array): void
  }
}

declare module 'libsignal/src/crypto' {
  export function encrypt(
    key: Uint8Array | Buffer,
    plaintext: Uint8Array | Buffer,
    iv: Uint8Array | Buffer
  ): Buffer

  export function decrypt(
    key: Uint8Array | Buffer,
    ciphertext: Uint8Array | Buffer,
    iv: Uint8Array | Buffer
  ): Uint8Array
}


