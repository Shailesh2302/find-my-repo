
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Repository
 * 
 */
export type Repository = $Result.DefaultSelection<Prisma.$RepositoryPayload>
/**
 * Model Contribution
 * 
 */
export type Contribution = $Result.DefaultSelection<Prisma.$ContributionPayload>
/**
 * Model UserRepoStat
 * 
 */
export type UserRepoStat = $Result.DefaultSelection<Prisma.$UserRepoStatPayload>
/**
 * Model RecommendedRepo
 * 
 */
export type RecommendedRepo = $Result.DefaultSelection<Prisma.$RecommendedRepoPayload>
/**
 * Model RepoFetchHistory
 * 
 */
export type RepoFetchHistory = $Result.DefaultSelection<Prisma.$RepoFetchHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repository`: Exposes CRUD operations for the **Repository** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repositories
    * const repositories = await prisma.repository.findMany()
    * ```
    */
  get repository(): Prisma.RepositoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contribution`: Exposes CRUD operations for the **Contribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contributions
    * const contributions = await prisma.contribution.findMany()
    * ```
    */
  get contribution(): Prisma.ContributionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRepoStat`: Exposes CRUD operations for the **UserRepoStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRepoStats
    * const userRepoStats = await prisma.userRepoStat.findMany()
    * ```
    */
  get userRepoStat(): Prisma.UserRepoStatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recommendedRepo`: Exposes CRUD operations for the **RecommendedRepo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecommendedRepos
    * const recommendedRepos = await prisma.recommendedRepo.findMany()
    * ```
    */
  get recommendedRepo(): Prisma.RecommendedRepoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repoFetchHistory`: Exposes CRUD operations for the **RepoFetchHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepoFetchHistories
    * const repoFetchHistories = await prisma.repoFetchHistory.findMany()
    * ```
    */
  get repoFetchHistory(): Prisma.RepoFetchHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Repository: 'Repository',
    Contribution: 'Contribution',
    UserRepoStat: 'UserRepoStat',
    RecommendedRepo: 'RecommendedRepo',
    RepoFetchHistory: 'RepoFetchHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "repository" | "contribution" | "userRepoStat" | "recommendedRepo" | "repoFetchHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Repository: {
        payload: Prisma.$RepositoryPayload<ExtArgs>
        fields: Prisma.RepositoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepositoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepositoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findFirst: {
            args: Prisma.RepositoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepositoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findMany: {
            args: Prisma.RepositoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          create: {
            args: Prisma.RepositoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          createMany: {
            args: Prisma.RepositoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepositoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          delete: {
            args: Prisma.RepositoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          update: {
            args: Prisma.RepositoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          deleteMany: {
            args: Prisma.RepositoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepositoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepositoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          upsert: {
            args: Prisma.RepositoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          aggregate: {
            args: Prisma.RepositoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepository>
          }
          groupBy: {
            args: Prisma.RepositoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepositoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepositoryCountArgs<ExtArgs>
            result: $Utils.Optional<RepositoryCountAggregateOutputType> | number
          }
        }
      }
      Contribution: {
        payload: Prisma.$ContributionPayload<ExtArgs>
        fields: Prisma.ContributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          findFirst: {
            args: Prisma.ContributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          findMany: {
            args: Prisma.ContributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>[]
          }
          create: {
            args: Prisma.ContributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          createMany: {
            args: Prisma.ContributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContributionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>[]
          }
          delete: {
            args: Prisma.ContributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          update: {
            args: Prisma.ContributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          deleteMany: {
            args: Prisma.ContributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContributionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>[]
          }
          upsert: {
            args: Prisma.ContributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          aggregate: {
            args: Prisma.ContributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContribution>
          }
          groupBy: {
            args: Prisma.ContributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContributionCountArgs<ExtArgs>
            result: $Utils.Optional<ContributionCountAggregateOutputType> | number
          }
        }
      }
      UserRepoStat: {
        payload: Prisma.$UserRepoStatPayload<ExtArgs>
        fields: Prisma.UserRepoStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRepoStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepoStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRepoStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepoStatPayload>
          }
          findFirst: {
            args: Prisma.UserRepoStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepoStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRepoStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepoStatPayload>
          }
          findMany: {
            args: Prisma.UserRepoStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepoStatPayload>[]
          }
          create: {
            args: Prisma.UserRepoStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepoStatPayload>
          }
          createMany: {
            args: Prisma.UserRepoStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRepoStatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepoStatPayload>[]
          }
          delete: {
            args: Prisma.UserRepoStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepoStatPayload>
          }
          update: {
            args: Prisma.UserRepoStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepoStatPayload>
          }
          deleteMany: {
            args: Prisma.UserRepoStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRepoStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRepoStatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepoStatPayload>[]
          }
          upsert: {
            args: Prisma.UserRepoStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepoStatPayload>
          }
          aggregate: {
            args: Prisma.UserRepoStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRepoStat>
          }
          groupBy: {
            args: Prisma.UserRepoStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRepoStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRepoStatCountArgs<ExtArgs>
            result: $Utils.Optional<UserRepoStatCountAggregateOutputType> | number
          }
        }
      }
      RecommendedRepo: {
        payload: Prisma.$RecommendedRepoPayload<ExtArgs>
        fields: Prisma.RecommendedRepoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendedRepoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedRepoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendedRepoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedRepoPayload>
          }
          findFirst: {
            args: Prisma.RecommendedRepoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedRepoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendedRepoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedRepoPayload>
          }
          findMany: {
            args: Prisma.RecommendedRepoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedRepoPayload>[]
          }
          create: {
            args: Prisma.RecommendedRepoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedRepoPayload>
          }
          createMany: {
            args: Prisma.RecommendedRepoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendedRepoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedRepoPayload>[]
          }
          delete: {
            args: Prisma.RecommendedRepoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedRepoPayload>
          }
          update: {
            args: Prisma.RecommendedRepoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedRepoPayload>
          }
          deleteMany: {
            args: Prisma.RecommendedRepoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendedRepoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecommendedRepoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedRepoPayload>[]
          }
          upsert: {
            args: Prisma.RecommendedRepoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedRepoPayload>
          }
          aggregate: {
            args: Prisma.RecommendedRepoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendedRepo>
          }
          groupBy: {
            args: Prisma.RecommendedRepoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendedRepoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendedRepoCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendedRepoCountAggregateOutputType> | number
          }
        }
      }
      RepoFetchHistory: {
        payload: Prisma.$RepoFetchHistoryPayload<ExtArgs>
        fields: Prisma.RepoFetchHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepoFetchHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoFetchHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepoFetchHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoFetchHistoryPayload>
          }
          findFirst: {
            args: Prisma.RepoFetchHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoFetchHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepoFetchHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoFetchHistoryPayload>
          }
          findMany: {
            args: Prisma.RepoFetchHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoFetchHistoryPayload>[]
          }
          create: {
            args: Prisma.RepoFetchHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoFetchHistoryPayload>
          }
          createMany: {
            args: Prisma.RepoFetchHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepoFetchHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoFetchHistoryPayload>[]
          }
          delete: {
            args: Prisma.RepoFetchHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoFetchHistoryPayload>
          }
          update: {
            args: Prisma.RepoFetchHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoFetchHistoryPayload>
          }
          deleteMany: {
            args: Prisma.RepoFetchHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepoFetchHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepoFetchHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoFetchHistoryPayload>[]
          }
          upsert: {
            args: Prisma.RepoFetchHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoFetchHistoryPayload>
          }
          aggregate: {
            args: Prisma.RepoFetchHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepoFetchHistory>
          }
          groupBy: {
            args: Prisma.RepoFetchHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepoFetchHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepoFetchHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<RepoFetchHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    repository?: RepositoryOmit
    contribution?: ContributionOmit
    userRepoStat?: UserRepoStatOmit
    recommendedRepo?: RecommendedRepoOmit
    repoFetchHistory?: RepoFetchHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    contributions: number
    recommendedRepos: number
    userRepoStats: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contributions?: boolean | UserCountOutputTypeCountContributionsArgs
    recommendedRepos?: boolean | UserCountOutputTypeCountRecommendedReposArgs
    userRepoStats?: boolean | UserCountOutputTypeCountUserRepoStatsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecommendedReposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendedRepoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRepoStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRepoStatWhereInput
  }


  /**
   * Count Type RepositoryCountOutputType
   */

  export type RepositoryCountOutputType = {
    contributions: number
    recommendedRepos: number
    fetchHistory: number
    userRepoStats: number
  }

  export type RepositoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contributions?: boolean | RepositoryCountOutputTypeCountContributionsArgs
    recommendedRepos?: boolean | RepositoryCountOutputTypeCountRecommendedReposArgs
    fetchHistory?: boolean | RepositoryCountOutputTypeCountFetchHistoryArgs
    userRepoStats?: boolean | RepositoryCountOutputTypeCountUserRepoStatsArgs
  }

  // Custom InputTypes
  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepositoryCountOutputType
     */
    select?: RepositoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountContributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountRecommendedReposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendedRepoWhereInput
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountFetchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepoFetchHistoryWhereInput
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountUserRepoStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRepoStatWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    avatar_url: string | null
    created_at: Date | null
    display_name: string | null
    github_id: string | null
    last_login_at: Date | null
    profile_url: string | null
    username: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    avatar_url: string | null
    created_at: Date | null
    display_name: string | null
    github_id: string | null
    last_login_at: Date | null
    profile_url: string | null
    username: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    avatar_url: number
    created_at: number
    display_name: number
    github_id: number
    last_login_at: number
    profile_url: number
    username: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    avatar_url?: true
    created_at?: true
    display_name?: true
    github_id?: true
    last_login_at?: true
    profile_url?: true
    username?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    avatar_url?: true
    created_at?: true
    display_name?: true
    github_id?: true
    last_login_at?: true
    profile_url?: true
    username?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    avatar_url?: true
    created_at?: true
    display_name?: true
    github_id?: true
    last_login_at?: true
    profile_url?: true
    username?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    avatar_url: string
    created_at: Date
    display_name: string | null
    github_id: string
    last_login_at: Date | null
    profile_url: string
    username: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    avatar_url?: boolean
    created_at?: boolean
    display_name?: boolean
    github_id?: boolean
    last_login_at?: boolean
    profile_url?: boolean
    username?: boolean
    contributions?: boolean | User$contributionsArgs<ExtArgs>
    recommendedRepos?: boolean | User$recommendedReposArgs<ExtArgs>
    userRepoStats?: boolean | User$userRepoStatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    avatar_url?: boolean
    created_at?: boolean
    display_name?: boolean
    github_id?: boolean
    last_login_at?: boolean
    profile_url?: boolean
    username?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    avatar_url?: boolean
    created_at?: boolean
    display_name?: boolean
    github_id?: boolean
    last_login_at?: boolean
    profile_url?: boolean
    username?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    avatar_url?: boolean
    created_at?: boolean
    display_name?: boolean
    github_id?: boolean
    last_login_at?: boolean
    profile_url?: boolean
    username?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "avatar_url" | "created_at" | "display_name" | "github_id" | "last_login_at" | "profile_url" | "username", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contributions?: boolean | User$contributionsArgs<ExtArgs>
    recommendedRepos?: boolean | User$recommendedReposArgs<ExtArgs>
    userRepoStats?: boolean | User$userRepoStatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      contributions: Prisma.$ContributionPayload<ExtArgs>[]
      recommendedRepos: Prisma.$RecommendedRepoPayload<ExtArgs>[]
      userRepoStats: Prisma.$UserRepoStatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      avatar_url: string
      created_at: Date
      display_name: string | null
      github_id: string
      last_login_at: Date | null
      profile_url: string
      username: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contributions<T extends User$contributionsArgs<ExtArgs> = {}>(args?: Subset<T, User$contributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recommendedRepos<T extends User$recommendedReposArgs<ExtArgs> = {}>(args?: Subset<T, User$recommendedReposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendedRepoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userRepoStats<T extends User$userRepoStatsArgs<ExtArgs> = {}>(args?: Subset<T, User$userRepoStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRepoStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly avatar_url: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly display_name: FieldRef<"User", 'String'>
    readonly github_id: FieldRef<"User", 'String'>
    readonly last_login_at: FieldRef<"User", 'DateTime'>
    readonly profile_url: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.contributions
   */
  export type User$contributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    cursor?: ContributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * User.recommendedRepos
   */
  export type User$recommendedReposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedRepo
     */
    select?: RecommendedRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedRepo
     */
    omit?: RecommendedRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedRepoInclude<ExtArgs> | null
    where?: RecommendedRepoWhereInput
    orderBy?: RecommendedRepoOrderByWithRelationInput | RecommendedRepoOrderByWithRelationInput[]
    cursor?: RecommendedRepoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendedRepoScalarFieldEnum | RecommendedRepoScalarFieldEnum[]
  }

  /**
   * User.userRepoStats
   */
  export type User$userRepoStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepoStat
     */
    select?: UserRepoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepoStat
     */
    omit?: UserRepoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepoStatInclude<ExtArgs> | null
    where?: UserRepoStatWhereInput
    orderBy?: UserRepoStatOrderByWithRelationInput | UserRepoStatOrderByWithRelationInput[]
    cursor?: UserRepoStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRepoStatScalarFieldEnum | UserRepoStatScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Repository
   */

  export type AggregateRepository = {
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  export type RepositoryAvgAggregateOutputType = {
    stars_count: number | null
    forks_count: number | null
    open_issues_count: number | null
  }

  export type RepositorySumAggregateOutputType = {
    stars_count: number | null
    forks_count: number | null
    open_issues_count: number | null
  }

  export type RepositoryMinAggregateOutputType = {
    id: string | null
    github_repo_id: string | null
    owner: string | null
    name: string | null
    full_name: string | null
    html_url: string | null
    description: string | null
    primary_language: string | null
    stars_count: number | null
    forks_count: number | null
    open_issues_count: number | null
    is_fork: boolean | null
    is_private: boolean | null
    last_pushed_at: Date | null
  }

  export type RepositoryMaxAggregateOutputType = {
    id: string | null
    github_repo_id: string | null
    owner: string | null
    name: string | null
    full_name: string | null
    html_url: string | null
    description: string | null
    primary_language: string | null
    stars_count: number | null
    forks_count: number | null
    open_issues_count: number | null
    is_fork: boolean | null
    is_private: boolean | null
    last_pushed_at: Date | null
  }

  export type RepositoryCountAggregateOutputType = {
    id: number
    github_repo_id: number
    owner: number
    name: number
    full_name: number
    html_url: number
    description: number
    primary_language: number
    stars_count: number
    forks_count: number
    open_issues_count: number
    is_fork: number
    is_private: number
    last_pushed_at: number
    _all: number
  }


  export type RepositoryAvgAggregateInputType = {
    stars_count?: true
    forks_count?: true
    open_issues_count?: true
  }

  export type RepositorySumAggregateInputType = {
    stars_count?: true
    forks_count?: true
    open_issues_count?: true
  }

  export type RepositoryMinAggregateInputType = {
    id?: true
    github_repo_id?: true
    owner?: true
    name?: true
    full_name?: true
    html_url?: true
    description?: true
    primary_language?: true
    stars_count?: true
    forks_count?: true
    open_issues_count?: true
    is_fork?: true
    is_private?: true
    last_pushed_at?: true
  }

  export type RepositoryMaxAggregateInputType = {
    id?: true
    github_repo_id?: true
    owner?: true
    name?: true
    full_name?: true
    html_url?: true
    description?: true
    primary_language?: true
    stars_count?: true
    forks_count?: true
    open_issues_count?: true
    is_fork?: true
    is_private?: true
    last_pushed_at?: true
  }

  export type RepositoryCountAggregateInputType = {
    id?: true
    github_repo_id?: true
    owner?: true
    name?: true
    full_name?: true
    html_url?: true
    description?: true
    primary_language?: true
    stars_count?: true
    forks_count?: true
    open_issues_count?: true
    is_fork?: true
    is_private?: true
    last_pushed_at?: true
    _all?: true
  }

  export type RepositoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repository to aggregate.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repositories
    **/
    _count?: true | RepositoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepositoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepositorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepositoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepositoryMaxAggregateInputType
  }

  export type GetRepositoryAggregateType<T extends RepositoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRepository]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepository[P]>
      : GetScalarType<T[P], AggregateRepository[P]>
  }




  export type RepositoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepositoryWhereInput
    orderBy?: RepositoryOrderByWithAggregationInput | RepositoryOrderByWithAggregationInput[]
    by: RepositoryScalarFieldEnum[] | RepositoryScalarFieldEnum
    having?: RepositoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepositoryCountAggregateInputType | true
    _avg?: RepositoryAvgAggregateInputType
    _sum?: RepositorySumAggregateInputType
    _min?: RepositoryMinAggregateInputType
    _max?: RepositoryMaxAggregateInputType
  }

  export type RepositoryGroupByOutputType = {
    id: string
    github_repo_id: string
    owner: string
    name: string
    full_name: string
    html_url: string
    description: string | null
    primary_language: string | null
    stars_count: number | null
    forks_count: number | null
    open_issues_count: number | null
    is_fork: boolean
    is_private: boolean
    last_pushed_at: Date | null
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  type GetRepositoryGroupByPayload<T extends RepositoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepositoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepositoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
            : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
        }
      >
    >


  export type RepositorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    github_repo_id?: boolean
    owner?: boolean
    name?: boolean
    full_name?: boolean
    html_url?: boolean
    description?: boolean
    primary_language?: boolean
    stars_count?: boolean
    forks_count?: boolean
    open_issues_count?: boolean
    is_fork?: boolean
    is_private?: boolean
    last_pushed_at?: boolean
    contributions?: boolean | Repository$contributionsArgs<ExtArgs>
    recommendedRepos?: boolean | Repository$recommendedReposArgs<ExtArgs>
    fetchHistory?: boolean | Repository$fetchHistoryArgs<ExtArgs>
    userRepoStats?: boolean | Repository$userRepoStatsArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    github_repo_id?: boolean
    owner?: boolean
    name?: boolean
    full_name?: boolean
    html_url?: boolean
    description?: boolean
    primary_language?: boolean
    stars_count?: boolean
    forks_count?: boolean
    open_issues_count?: boolean
    is_fork?: boolean
    is_private?: boolean
    last_pushed_at?: boolean
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    github_repo_id?: boolean
    owner?: boolean
    name?: boolean
    full_name?: boolean
    html_url?: boolean
    description?: boolean
    primary_language?: boolean
    stars_count?: boolean
    forks_count?: boolean
    open_issues_count?: boolean
    is_fork?: boolean
    is_private?: boolean
    last_pushed_at?: boolean
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectScalar = {
    id?: boolean
    github_repo_id?: boolean
    owner?: boolean
    name?: boolean
    full_name?: boolean
    html_url?: boolean
    description?: boolean
    primary_language?: boolean
    stars_count?: boolean
    forks_count?: boolean
    open_issues_count?: boolean
    is_fork?: boolean
    is_private?: boolean
    last_pushed_at?: boolean
  }

  export type RepositoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "github_repo_id" | "owner" | "name" | "full_name" | "html_url" | "description" | "primary_language" | "stars_count" | "forks_count" | "open_issues_count" | "is_fork" | "is_private" | "last_pushed_at", ExtArgs["result"]["repository"]>
  export type RepositoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contributions?: boolean | Repository$contributionsArgs<ExtArgs>
    recommendedRepos?: boolean | Repository$recommendedReposArgs<ExtArgs>
    fetchHistory?: boolean | Repository$fetchHistoryArgs<ExtArgs>
    userRepoStats?: boolean | Repository$userRepoStatsArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepositoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RepositoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RepositoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repository"
    objects: {
      contributions: Prisma.$ContributionPayload<ExtArgs>[]
      recommendedRepos: Prisma.$RecommendedRepoPayload<ExtArgs>[]
      fetchHistory: Prisma.$RepoFetchHistoryPayload<ExtArgs>[]
      userRepoStats: Prisma.$UserRepoStatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      github_repo_id: string
      owner: string
      name: string
      full_name: string
      html_url: string
      description: string | null
      primary_language: string | null
      stars_count: number | null
      forks_count: number | null
      open_issues_count: number | null
      is_fork: boolean
      is_private: boolean
      last_pushed_at: Date | null
    }, ExtArgs["result"]["repository"]>
    composites: {}
  }

  type RepositoryGetPayload<S extends boolean | null | undefined | RepositoryDefaultArgs> = $Result.GetResult<Prisma.$RepositoryPayload, S>

  type RepositoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepositoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepositoryCountAggregateInputType | true
    }

  export interface RepositoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repository'], meta: { name: 'Repository' } }
    /**
     * Find zero or one Repository that matches the filter.
     * @param {RepositoryFindUniqueArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepositoryFindUniqueArgs>(args: SelectSubset<T, RepositoryFindUniqueArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repository that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepositoryFindUniqueOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepositoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RepositoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repository that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepositoryFindFirstArgs>(args?: SelectSubset<T, RepositoryFindFirstArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repository that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepositoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RepositoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repositories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repositories
     * const repositories = await prisma.repository.findMany()
     * 
     * // Get first 10 Repositories
     * const repositories = await prisma.repository.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repositoryWithIdOnly = await prisma.repository.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepositoryFindManyArgs>(args?: SelectSubset<T, RepositoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repository.
     * @param {RepositoryCreateArgs} args - Arguments to create a Repository.
     * @example
     * // Create one Repository
     * const Repository = await prisma.repository.create({
     *   data: {
     *     // ... data to create a Repository
     *   }
     * })
     * 
     */
    create<T extends RepositoryCreateArgs>(args: SelectSubset<T, RepositoryCreateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repositories.
     * @param {RepositoryCreateManyArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepositoryCreateManyArgs>(args?: SelectSubset<T, RepositoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repositories and returns the data saved in the database.
     * @param {RepositoryCreateManyAndReturnArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repositories and only return the `id`
     * const repositoryWithIdOnly = await prisma.repository.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepositoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RepositoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Repository.
     * @param {RepositoryDeleteArgs} args - Arguments to delete one Repository.
     * @example
     * // Delete one Repository
     * const Repository = await prisma.repository.delete({
     *   where: {
     *     // ... filter to delete one Repository
     *   }
     * })
     * 
     */
    delete<T extends RepositoryDeleteArgs>(args: SelectSubset<T, RepositoryDeleteArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repository.
     * @param {RepositoryUpdateArgs} args - Arguments to update one Repository.
     * @example
     * // Update one Repository
     * const repository = await prisma.repository.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepositoryUpdateArgs>(args: SelectSubset<T, RepositoryUpdateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repositories.
     * @param {RepositoryDeleteManyArgs} args - Arguments to filter Repositories to delete.
     * @example
     * // Delete a few Repositories
     * const { count } = await prisma.repository.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepositoryDeleteManyArgs>(args?: SelectSubset<T, RepositoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepositoryUpdateManyArgs>(args: SelectSubset<T, RepositoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories and returns the data updated in the database.
     * @param {RepositoryUpdateManyAndReturnArgs} args - Arguments to update many Repositories.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Repositories and only return the `id`
     * const repositoryWithIdOnly = await prisma.repository.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepositoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RepositoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Repository.
     * @param {RepositoryUpsertArgs} args - Arguments to update or create a Repository.
     * @example
     * // Update or create a Repository
     * const repository = await prisma.repository.upsert({
     *   create: {
     *     // ... data to create a Repository
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repository we want to update
     *   }
     * })
     */
    upsert<T extends RepositoryUpsertArgs>(args: SelectSubset<T, RepositoryUpsertArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryCountArgs} args - Arguments to filter Repositories to count.
     * @example
     * // Count the number of Repositories
     * const count = await prisma.repository.count({
     *   where: {
     *     // ... the filter for the Repositories we want to count
     *   }
     * })
    **/
    count<T extends RepositoryCountArgs>(
      args?: Subset<T, RepositoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepositoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepositoryAggregateArgs>(args: Subset<T, RepositoryAggregateArgs>): Prisma.PrismaPromise<GetRepositoryAggregateType<T>>

    /**
     * Group by Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepositoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepositoryGroupByArgs['orderBy'] }
        : { orderBy?: RepositoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepositoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepositoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repository model
   */
  readonly fields: RepositoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repository.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepositoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contributions<T extends Repository$contributionsArgs<ExtArgs> = {}>(args?: Subset<T, Repository$contributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recommendedRepos<T extends Repository$recommendedReposArgs<ExtArgs> = {}>(args?: Subset<T, Repository$recommendedReposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendedRepoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fetchHistory<T extends Repository$fetchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Repository$fetchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepoFetchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userRepoStats<T extends Repository$userRepoStatsArgs<ExtArgs> = {}>(args?: Subset<T, Repository$userRepoStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRepoStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Repository model
   */
  interface RepositoryFieldRefs {
    readonly id: FieldRef<"Repository", 'String'>
    readonly github_repo_id: FieldRef<"Repository", 'String'>
    readonly owner: FieldRef<"Repository", 'String'>
    readonly name: FieldRef<"Repository", 'String'>
    readonly full_name: FieldRef<"Repository", 'String'>
    readonly html_url: FieldRef<"Repository", 'String'>
    readonly description: FieldRef<"Repository", 'String'>
    readonly primary_language: FieldRef<"Repository", 'String'>
    readonly stars_count: FieldRef<"Repository", 'Int'>
    readonly forks_count: FieldRef<"Repository", 'Int'>
    readonly open_issues_count: FieldRef<"Repository", 'Int'>
    readonly is_fork: FieldRef<"Repository", 'Boolean'>
    readonly is_private: FieldRef<"Repository", 'Boolean'>
    readonly last_pushed_at: FieldRef<"Repository", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Repository findUnique
   */
  export type RepositoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findUniqueOrThrow
   */
  export type RepositoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findFirst
   */
  export type RepositoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findFirstOrThrow
   */
  export type RepositoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findMany
   */
  export type RepositoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repositories to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository create
   */
  export type RepositoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Repository.
     */
    data: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
  }

  /**
   * Repository createMany
   */
  export type RepositoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repository createManyAndReturn
   */
  export type RepositoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repository update
   */
  export type RepositoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Repository.
     */
    data: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
    /**
     * Choose, which Repository to update.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository updateMany
   */
  export type RepositoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repositories.
     */
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyInput>
    /**
     * Filter which Repositories to update
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to update.
     */
    limit?: number
  }

  /**
   * Repository updateManyAndReturn
   */
  export type RepositoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * The data used to update Repositories.
     */
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyInput>
    /**
     * Filter which Repositories to update
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to update.
     */
    limit?: number
  }

  /**
   * Repository upsert
   */
  export type RepositoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Repository to update in case it exists.
     */
    where: RepositoryWhereUniqueInput
    /**
     * In case the Repository found by the `where` argument doesn't exist, create a new Repository with this data.
     */
    create: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
    /**
     * In case the Repository was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
  }

  /**
   * Repository delete
   */
  export type RepositoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter which Repository to delete.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository deleteMany
   */
  export type RepositoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repositories to delete
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to delete.
     */
    limit?: number
  }

  /**
   * Repository.contributions
   */
  export type Repository$contributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    cursor?: ContributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Repository.recommendedRepos
   */
  export type Repository$recommendedReposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedRepo
     */
    select?: RecommendedRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedRepo
     */
    omit?: RecommendedRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedRepoInclude<ExtArgs> | null
    where?: RecommendedRepoWhereInput
    orderBy?: RecommendedRepoOrderByWithRelationInput | RecommendedRepoOrderByWithRelationInput[]
    cursor?: RecommendedRepoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendedRepoScalarFieldEnum | RecommendedRepoScalarFieldEnum[]
  }

  /**
   * Repository.fetchHistory
   */
  export type Repository$fetchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoFetchHistory
     */
    select?: RepoFetchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoFetchHistory
     */
    omit?: RepoFetchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoFetchHistoryInclude<ExtArgs> | null
    where?: RepoFetchHistoryWhereInput
    orderBy?: RepoFetchHistoryOrderByWithRelationInput | RepoFetchHistoryOrderByWithRelationInput[]
    cursor?: RepoFetchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepoFetchHistoryScalarFieldEnum | RepoFetchHistoryScalarFieldEnum[]
  }

  /**
   * Repository.userRepoStats
   */
  export type Repository$userRepoStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepoStat
     */
    select?: UserRepoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepoStat
     */
    omit?: UserRepoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepoStatInclude<ExtArgs> | null
    where?: UserRepoStatWhereInput
    orderBy?: UserRepoStatOrderByWithRelationInput | UserRepoStatOrderByWithRelationInput[]
    cursor?: UserRepoStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRepoStatScalarFieldEnum | UserRepoStatScalarFieldEnum[]
  }

  /**
   * Repository without action
   */
  export type RepositoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
  }


  /**
   * Model Contribution
   */

  export type AggregateContribution = {
    _count: ContributionCountAggregateOutputType | null
    _min: ContributionMinAggregateOutputType | null
    _max: ContributionMaxAggregateOutputType | null
  }

  export type ContributionMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    repo_id: string | null
    type: string | null
    github_event_id: string | null
    event_url: string | null
    event_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ContributionMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    repo_id: string | null
    type: string | null
    github_event_id: string | null
    event_url: string | null
    event_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ContributionCountAggregateOutputType = {
    id: number
    user_id: number
    repo_id: number
    type: number
    github_event_id: number
    event_url: number
    event_date: number
    details: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ContributionMinAggregateInputType = {
    id?: true
    user_id?: true
    repo_id?: true
    type?: true
    github_event_id?: true
    event_url?: true
    event_date?: true
    created_at?: true
    updated_at?: true
  }

  export type ContributionMaxAggregateInputType = {
    id?: true
    user_id?: true
    repo_id?: true
    type?: true
    github_event_id?: true
    event_url?: true
    event_date?: true
    created_at?: true
    updated_at?: true
  }

  export type ContributionCountAggregateInputType = {
    id?: true
    user_id?: true
    repo_id?: true
    type?: true
    github_event_id?: true
    event_url?: true
    event_date?: true
    details?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ContributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contribution to aggregate.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contributions
    **/
    _count?: true | ContributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContributionMaxAggregateInputType
  }

  export type GetContributionAggregateType<T extends ContributionAggregateArgs> = {
        [P in keyof T & keyof AggregateContribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContribution[P]>
      : GetScalarType<T[P], AggregateContribution[P]>
  }




  export type ContributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithAggregationInput | ContributionOrderByWithAggregationInput[]
    by: ContributionScalarFieldEnum[] | ContributionScalarFieldEnum
    having?: ContributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContributionCountAggregateInputType | true
    _min?: ContributionMinAggregateInputType
    _max?: ContributionMaxAggregateInputType
  }

  export type ContributionGroupByOutputType = {
    id: string
    user_id: string
    repo_id: string
    type: string
    github_event_id: string | null
    event_url: string | null
    event_date: Date | null
    details: JsonValue | null
    created_at: Date
    updated_at: Date
    _count: ContributionCountAggregateOutputType | null
    _min: ContributionMinAggregateOutputType | null
    _max: ContributionMaxAggregateOutputType | null
  }

  type GetContributionGroupByPayload<T extends ContributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContributionGroupByOutputType[P]>
            : GetScalarType<T[P], ContributionGroupByOutputType[P]>
        }
      >
    >


  export type ContributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    repo_id?: boolean
    type?: boolean
    github_event_id?: boolean
    event_url?: boolean
    event_date?: boolean
    details?: boolean
    created_at?: boolean
    updated_at?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contribution"]>

  export type ContributionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    repo_id?: boolean
    type?: boolean
    github_event_id?: boolean
    event_url?: boolean
    event_date?: boolean
    details?: boolean
    created_at?: boolean
    updated_at?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contribution"]>

  export type ContributionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    repo_id?: boolean
    type?: boolean
    github_event_id?: boolean
    event_url?: boolean
    event_date?: boolean
    details?: boolean
    created_at?: boolean
    updated_at?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contribution"]>

  export type ContributionSelectScalar = {
    id?: boolean
    user_id?: boolean
    repo_id?: boolean
    type?: boolean
    github_event_id?: boolean
    event_url?: boolean
    event_date?: boolean
    details?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ContributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "repo_id" | "type" | "github_event_id" | "event_url" | "event_date" | "details" | "created_at" | "updated_at", ExtArgs["result"]["contribution"]>
  export type ContributionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContributionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContributionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contribution"
    objects: {
      repo: Prisma.$RepositoryPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      repo_id: string
      type: string
      github_event_id: string | null
      event_url: string | null
      event_date: Date | null
      details: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["contribution"]>
    composites: {}
  }

  type ContributionGetPayload<S extends boolean | null | undefined | ContributionDefaultArgs> = $Result.GetResult<Prisma.$ContributionPayload, S>

  type ContributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContributionCountAggregateInputType | true
    }

  export interface ContributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contribution'], meta: { name: 'Contribution' } }
    /**
     * Find zero or one Contribution that matches the filter.
     * @param {ContributionFindUniqueArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContributionFindUniqueArgs>(args: SelectSubset<T, ContributionFindUniqueArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContributionFindUniqueOrThrowArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContributionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionFindFirstArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContributionFindFirstArgs>(args?: SelectSubset<T, ContributionFindFirstArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionFindFirstOrThrowArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContributionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contributions
     * const contributions = await prisma.contribution.findMany()
     * 
     * // Get first 10 Contributions
     * const contributions = await prisma.contribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contributionWithIdOnly = await prisma.contribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContributionFindManyArgs>(args?: SelectSubset<T, ContributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contribution.
     * @param {ContributionCreateArgs} args - Arguments to create a Contribution.
     * @example
     * // Create one Contribution
     * const Contribution = await prisma.contribution.create({
     *   data: {
     *     // ... data to create a Contribution
     *   }
     * })
     * 
     */
    create<T extends ContributionCreateArgs>(args: SelectSubset<T, ContributionCreateArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contributions.
     * @param {ContributionCreateManyArgs} args - Arguments to create many Contributions.
     * @example
     * // Create many Contributions
     * const contribution = await prisma.contribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContributionCreateManyArgs>(args?: SelectSubset<T, ContributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contributions and returns the data saved in the database.
     * @param {ContributionCreateManyAndReturnArgs} args - Arguments to create many Contributions.
     * @example
     * // Create many Contributions
     * const contribution = await prisma.contribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contributions and only return the `id`
     * const contributionWithIdOnly = await prisma.contribution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContributionCreateManyAndReturnArgs>(args?: SelectSubset<T, ContributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contribution.
     * @param {ContributionDeleteArgs} args - Arguments to delete one Contribution.
     * @example
     * // Delete one Contribution
     * const Contribution = await prisma.contribution.delete({
     *   where: {
     *     // ... filter to delete one Contribution
     *   }
     * })
     * 
     */
    delete<T extends ContributionDeleteArgs>(args: SelectSubset<T, ContributionDeleteArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contribution.
     * @param {ContributionUpdateArgs} args - Arguments to update one Contribution.
     * @example
     * // Update one Contribution
     * const contribution = await prisma.contribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContributionUpdateArgs>(args: SelectSubset<T, ContributionUpdateArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contributions.
     * @param {ContributionDeleteManyArgs} args - Arguments to filter Contributions to delete.
     * @example
     * // Delete a few Contributions
     * const { count } = await prisma.contribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContributionDeleteManyArgs>(args?: SelectSubset<T, ContributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contributions
     * const contribution = await prisma.contribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContributionUpdateManyArgs>(args: SelectSubset<T, ContributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contributions and returns the data updated in the database.
     * @param {ContributionUpdateManyAndReturnArgs} args - Arguments to update many Contributions.
     * @example
     * // Update many Contributions
     * const contribution = await prisma.contribution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contributions and only return the `id`
     * const contributionWithIdOnly = await prisma.contribution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContributionUpdateManyAndReturnArgs>(args: SelectSubset<T, ContributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contribution.
     * @param {ContributionUpsertArgs} args - Arguments to update or create a Contribution.
     * @example
     * // Update or create a Contribution
     * const contribution = await prisma.contribution.upsert({
     *   create: {
     *     // ... data to create a Contribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contribution we want to update
     *   }
     * })
     */
    upsert<T extends ContributionUpsertArgs>(args: SelectSubset<T, ContributionUpsertArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionCountArgs} args - Arguments to filter Contributions to count.
     * @example
     * // Count the number of Contributions
     * const count = await prisma.contribution.count({
     *   where: {
     *     // ... the filter for the Contributions we want to count
     *   }
     * })
    **/
    count<T extends ContributionCountArgs>(
      args?: Subset<T, ContributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContributionAggregateArgs>(args: Subset<T, ContributionAggregateArgs>): Prisma.PrismaPromise<GetContributionAggregateType<T>>

    /**
     * Group by Contribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContributionGroupByArgs['orderBy'] }
        : { orderBy?: ContributionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contribution model
   */
  readonly fields: ContributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repo<T extends RepositoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepositoryDefaultArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contribution model
   */
  interface ContributionFieldRefs {
    readonly id: FieldRef<"Contribution", 'String'>
    readonly user_id: FieldRef<"Contribution", 'String'>
    readonly repo_id: FieldRef<"Contribution", 'String'>
    readonly type: FieldRef<"Contribution", 'String'>
    readonly github_event_id: FieldRef<"Contribution", 'String'>
    readonly event_url: FieldRef<"Contribution", 'String'>
    readonly event_date: FieldRef<"Contribution", 'DateTime'>
    readonly details: FieldRef<"Contribution", 'Json'>
    readonly created_at: FieldRef<"Contribution", 'DateTime'>
    readonly updated_at: FieldRef<"Contribution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contribution findUnique
   */
  export type ContributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where: ContributionWhereUniqueInput
  }

  /**
   * Contribution findUniqueOrThrow
   */
  export type ContributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where: ContributionWhereUniqueInput
  }

  /**
   * Contribution findFirst
   */
  export type ContributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contributions.
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contributions.
     */
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Contribution findFirstOrThrow
   */
  export type ContributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contributions.
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contributions.
     */
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Contribution findMany
   */
  export type ContributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contributions to fetch.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contributions.
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Contribution create
   */
  export type ContributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * The data needed to create a Contribution.
     */
    data: XOR<ContributionCreateInput, ContributionUncheckedCreateInput>
  }

  /**
   * Contribution createMany
   */
  export type ContributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contributions.
     */
    data: ContributionCreateManyInput | ContributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contribution createManyAndReturn
   */
  export type ContributionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * The data used to create many Contributions.
     */
    data: ContributionCreateManyInput | ContributionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contribution update
   */
  export type ContributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * The data needed to update a Contribution.
     */
    data: XOR<ContributionUpdateInput, ContributionUncheckedUpdateInput>
    /**
     * Choose, which Contribution to update.
     */
    where: ContributionWhereUniqueInput
  }

  /**
   * Contribution updateMany
   */
  export type ContributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contributions.
     */
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyInput>
    /**
     * Filter which Contributions to update
     */
    where?: ContributionWhereInput
    /**
     * Limit how many Contributions to update.
     */
    limit?: number
  }

  /**
   * Contribution updateManyAndReturn
   */
  export type ContributionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * The data used to update Contributions.
     */
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyInput>
    /**
     * Filter which Contributions to update
     */
    where?: ContributionWhereInput
    /**
     * Limit how many Contributions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contribution upsert
   */
  export type ContributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * The filter to search for the Contribution to update in case it exists.
     */
    where: ContributionWhereUniqueInput
    /**
     * In case the Contribution found by the `where` argument doesn't exist, create a new Contribution with this data.
     */
    create: XOR<ContributionCreateInput, ContributionUncheckedCreateInput>
    /**
     * In case the Contribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContributionUpdateInput, ContributionUncheckedUpdateInput>
  }

  /**
   * Contribution delete
   */
  export type ContributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter which Contribution to delete.
     */
    where: ContributionWhereUniqueInput
  }

  /**
   * Contribution deleteMany
   */
  export type ContributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contributions to delete
     */
    where?: ContributionWhereInput
    /**
     * Limit how many Contributions to delete.
     */
    limit?: number
  }

  /**
   * Contribution without action
   */
  export type ContributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
  }


  /**
   * Model UserRepoStat
   */

  export type AggregateUserRepoStat = {
    _count: UserRepoStatCountAggregateOutputType | null
    _avg: UserRepoStatAvgAggregateOutputType | null
    _sum: UserRepoStatSumAggregateOutputType | null
    _min: UserRepoStatMinAggregateOutputType | null
    _max: UserRepoStatMaxAggregateOutputType | null
  }

  export type UserRepoStatAvgAggregateOutputType = {
    total_commits: number | null
    total_prs: number | null
    total_issues: number | null
  }

  export type UserRepoStatSumAggregateOutputType = {
    total_commits: number | null
    total_prs: number | null
    total_issues: number | null
  }

  export type UserRepoStatMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    repo_id: string | null
    total_commits: number | null
    total_prs: number | null
    total_issues: number | null
    last_updated_at: Date | null
  }

  export type UserRepoStatMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    repo_id: string | null
    total_commits: number | null
    total_prs: number | null
    total_issues: number | null
    last_updated_at: Date | null
  }

  export type UserRepoStatCountAggregateOutputType = {
    id: number
    user_id: number
    repo_id: number
    total_commits: number
    total_prs: number
    total_issues: number
    last_updated_at: number
    _all: number
  }


  export type UserRepoStatAvgAggregateInputType = {
    total_commits?: true
    total_prs?: true
    total_issues?: true
  }

  export type UserRepoStatSumAggregateInputType = {
    total_commits?: true
    total_prs?: true
    total_issues?: true
  }

  export type UserRepoStatMinAggregateInputType = {
    id?: true
    user_id?: true
    repo_id?: true
    total_commits?: true
    total_prs?: true
    total_issues?: true
    last_updated_at?: true
  }

  export type UserRepoStatMaxAggregateInputType = {
    id?: true
    user_id?: true
    repo_id?: true
    total_commits?: true
    total_prs?: true
    total_issues?: true
    last_updated_at?: true
  }

  export type UserRepoStatCountAggregateInputType = {
    id?: true
    user_id?: true
    repo_id?: true
    total_commits?: true
    total_prs?: true
    total_issues?: true
    last_updated_at?: true
    _all?: true
  }

  export type UserRepoStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRepoStat to aggregate.
     */
    where?: UserRepoStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRepoStats to fetch.
     */
    orderBy?: UserRepoStatOrderByWithRelationInput | UserRepoStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRepoStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRepoStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRepoStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRepoStats
    **/
    _count?: true | UserRepoStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRepoStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRepoStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRepoStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRepoStatMaxAggregateInputType
  }

  export type GetUserRepoStatAggregateType<T extends UserRepoStatAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRepoStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRepoStat[P]>
      : GetScalarType<T[P], AggregateUserRepoStat[P]>
  }




  export type UserRepoStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRepoStatWhereInput
    orderBy?: UserRepoStatOrderByWithAggregationInput | UserRepoStatOrderByWithAggregationInput[]
    by: UserRepoStatScalarFieldEnum[] | UserRepoStatScalarFieldEnum
    having?: UserRepoStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRepoStatCountAggregateInputType | true
    _avg?: UserRepoStatAvgAggregateInputType
    _sum?: UserRepoStatSumAggregateInputType
    _min?: UserRepoStatMinAggregateInputType
    _max?: UserRepoStatMaxAggregateInputType
  }

  export type UserRepoStatGroupByOutputType = {
    id: string
    user_id: string
    repo_id: string
    total_commits: number
    total_prs: number
    total_issues: number
    last_updated_at: Date
    _count: UserRepoStatCountAggregateOutputType | null
    _avg: UserRepoStatAvgAggregateOutputType | null
    _sum: UserRepoStatSumAggregateOutputType | null
    _min: UserRepoStatMinAggregateOutputType | null
    _max: UserRepoStatMaxAggregateOutputType | null
  }

  type GetUserRepoStatGroupByPayload<T extends UserRepoStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRepoStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRepoStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRepoStatGroupByOutputType[P]>
            : GetScalarType<T[P], UserRepoStatGroupByOutputType[P]>
        }
      >
    >


  export type UserRepoStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    repo_id?: boolean
    total_commits?: boolean
    total_prs?: boolean
    total_issues?: boolean
    last_updated_at?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRepoStat"]>

  export type UserRepoStatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    repo_id?: boolean
    total_commits?: boolean
    total_prs?: boolean
    total_issues?: boolean
    last_updated_at?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRepoStat"]>

  export type UserRepoStatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    repo_id?: boolean
    total_commits?: boolean
    total_prs?: boolean
    total_issues?: boolean
    last_updated_at?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRepoStat"]>

  export type UserRepoStatSelectScalar = {
    id?: boolean
    user_id?: boolean
    repo_id?: boolean
    total_commits?: boolean
    total_prs?: boolean
    total_issues?: boolean
    last_updated_at?: boolean
  }

  export type UserRepoStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "repo_id" | "total_commits" | "total_prs" | "total_issues" | "last_updated_at", ExtArgs["result"]["userRepoStat"]>
  export type UserRepoStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserRepoStatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserRepoStatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserRepoStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRepoStat"
    objects: {
      repo: Prisma.$RepositoryPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      repo_id: string
      total_commits: number
      total_prs: number
      total_issues: number
      last_updated_at: Date
    }, ExtArgs["result"]["userRepoStat"]>
    composites: {}
  }

  type UserRepoStatGetPayload<S extends boolean | null | undefined | UserRepoStatDefaultArgs> = $Result.GetResult<Prisma.$UserRepoStatPayload, S>

  type UserRepoStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRepoStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRepoStatCountAggregateInputType | true
    }

  export interface UserRepoStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRepoStat'], meta: { name: 'UserRepoStat' } }
    /**
     * Find zero or one UserRepoStat that matches the filter.
     * @param {UserRepoStatFindUniqueArgs} args - Arguments to find a UserRepoStat
     * @example
     * // Get one UserRepoStat
     * const userRepoStat = await prisma.userRepoStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRepoStatFindUniqueArgs>(args: SelectSubset<T, UserRepoStatFindUniqueArgs<ExtArgs>>): Prisma__UserRepoStatClient<$Result.GetResult<Prisma.$UserRepoStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRepoStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRepoStatFindUniqueOrThrowArgs} args - Arguments to find a UserRepoStat
     * @example
     * // Get one UserRepoStat
     * const userRepoStat = await prisma.userRepoStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRepoStatFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRepoStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRepoStatClient<$Result.GetResult<Prisma.$UserRepoStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRepoStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRepoStatFindFirstArgs} args - Arguments to find a UserRepoStat
     * @example
     * // Get one UserRepoStat
     * const userRepoStat = await prisma.userRepoStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRepoStatFindFirstArgs>(args?: SelectSubset<T, UserRepoStatFindFirstArgs<ExtArgs>>): Prisma__UserRepoStatClient<$Result.GetResult<Prisma.$UserRepoStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRepoStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRepoStatFindFirstOrThrowArgs} args - Arguments to find a UserRepoStat
     * @example
     * // Get one UserRepoStat
     * const userRepoStat = await prisma.userRepoStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRepoStatFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRepoStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRepoStatClient<$Result.GetResult<Prisma.$UserRepoStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRepoStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRepoStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRepoStats
     * const userRepoStats = await prisma.userRepoStat.findMany()
     * 
     * // Get first 10 UserRepoStats
     * const userRepoStats = await prisma.userRepoStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRepoStatWithIdOnly = await prisma.userRepoStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRepoStatFindManyArgs>(args?: SelectSubset<T, UserRepoStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRepoStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRepoStat.
     * @param {UserRepoStatCreateArgs} args - Arguments to create a UserRepoStat.
     * @example
     * // Create one UserRepoStat
     * const UserRepoStat = await prisma.userRepoStat.create({
     *   data: {
     *     // ... data to create a UserRepoStat
     *   }
     * })
     * 
     */
    create<T extends UserRepoStatCreateArgs>(args: SelectSubset<T, UserRepoStatCreateArgs<ExtArgs>>): Prisma__UserRepoStatClient<$Result.GetResult<Prisma.$UserRepoStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRepoStats.
     * @param {UserRepoStatCreateManyArgs} args - Arguments to create many UserRepoStats.
     * @example
     * // Create many UserRepoStats
     * const userRepoStat = await prisma.userRepoStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRepoStatCreateManyArgs>(args?: SelectSubset<T, UserRepoStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRepoStats and returns the data saved in the database.
     * @param {UserRepoStatCreateManyAndReturnArgs} args - Arguments to create many UserRepoStats.
     * @example
     * // Create many UserRepoStats
     * const userRepoStat = await prisma.userRepoStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRepoStats and only return the `id`
     * const userRepoStatWithIdOnly = await prisma.userRepoStat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRepoStatCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRepoStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRepoStatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRepoStat.
     * @param {UserRepoStatDeleteArgs} args - Arguments to delete one UserRepoStat.
     * @example
     * // Delete one UserRepoStat
     * const UserRepoStat = await prisma.userRepoStat.delete({
     *   where: {
     *     // ... filter to delete one UserRepoStat
     *   }
     * })
     * 
     */
    delete<T extends UserRepoStatDeleteArgs>(args: SelectSubset<T, UserRepoStatDeleteArgs<ExtArgs>>): Prisma__UserRepoStatClient<$Result.GetResult<Prisma.$UserRepoStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRepoStat.
     * @param {UserRepoStatUpdateArgs} args - Arguments to update one UserRepoStat.
     * @example
     * // Update one UserRepoStat
     * const userRepoStat = await prisma.userRepoStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRepoStatUpdateArgs>(args: SelectSubset<T, UserRepoStatUpdateArgs<ExtArgs>>): Prisma__UserRepoStatClient<$Result.GetResult<Prisma.$UserRepoStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRepoStats.
     * @param {UserRepoStatDeleteManyArgs} args - Arguments to filter UserRepoStats to delete.
     * @example
     * // Delete a few UserRepoStats
     * const { count } = await prisma.userRepoStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRepoStatDeleteManyArgs>(args?: SelectSubset<T, UserRepoStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRepoStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRepoStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRepoStats
     * const userRepoStat = await prisma.userRepoStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRepoStatUpdateManyArgs>(args: SelectSubset<T, UserRepoStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRepoStats and returns the data updated in the database.
     * @param {UserRepoStatUpdateManyAndReturnArgs} args - Arguments to update many UserRepoStats.
     * @example
     * // Update many UserRepoStats
     * const userRepoStat = await prisma.userRepoStat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRepoStats and only return the `id`
     * const userRepoStatWithIdOnly = await prisma.userRepoStat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRepoStatUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRepoStatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRepoStatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRepoStat.
     * @param {UserRepoStatUpsertArgs} args - Arguments to update or create a UserRepoStat.
     * @example
     * // Update or create a UserRepoStat
     * const userRepoStat = await prisma.userRepoStat.upsert({
     *   create: {
     *     // ... data to create a UserRepoStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRepoStat we want to update
     *   }
     * })
     */
    upsert<T extends UserRepoStatUpsertArgs>(args: SelectSubset<T, UserRepoStatUpsertArgs<ExtArgs>>): Prisma__UserRepoStatClient<$Result.GetResult<Prisma.$UserRepoStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRepoStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRepoStatCountArgs} args - Arguments to filter UserRepoStats to count.
     * @example
     * // Count the number of UserRepoStats
     * const count = await prisma.userRepoStat.count({
     *   where: {
     *     // ... the filter for the UserRepoStats we want to count
     *   }
     * })
    **/
    count<T extends UserRepoStatCountArgs>(
      args?: Subset<T, UserRepoStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRepoStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRepoStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRepoStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRepoStatAggregateArgs>(args: Subset<T, UserRepoStatAggregateArgs>): Prisma.PrismaPromise<GetUserRepoStatAggregateType<T>>

    /**
     * Group by UserRepoStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRepoStatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRepoStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRepoStatGroupByArgs['orderBy'] }
        : { orderBy?: UserRepoStatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRepoStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRepoStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRepoStat model
   */
  readonly fields: UserRepoStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRepoStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRepoStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repo<T extends RepositoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepositoryDefaultArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRepoStat model
   */
  interface UserRepoStatFieldRefs {
    readonly id: FieldRef<"UserRepoStat", 'String'>
    readonly user_id: FieldRef<"UserRepoStat", 'String'>
    readonly repo_id: FieldRef<"UserRepoStat", 'String'>
    readonly total_commits: FieldRef<"UserRepoStat", 'Int'>
    readonly total_prs: FieldRef<"UserRepoStat", 'Int'>
    readonly total_issues: FieldRef<"UserRepoStat", 'Int'>
    readonly last_updated_at: FieldRef<"UserRepoStat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRepoStat findUnique
   */
  export type UserRepoStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepoStat
     */
    select?: UserRepoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepoStat
     */
    omit?: UserRepoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepoStatInclude<ExtArgs> | null
    /**
     * Filter, which UserRepoStat to fetch.
     */
    where: UserRepoStatWhereUniqueInput
  }

  /**
   * UserRepoStat findUniqueOrThrow
   */
  export type UserRepoStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepoStat
     */
    select?: UserRepoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepoStat
     */
    omit?: UserRepoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepoStatInclude<ExtArgs> | null
    /**
     * Filter, which UserRepoStat to fetch.
     */
    where: UserRepoStatWhereUniqueInput
  }

  /**
   * UserRepoStat findFirst
   */
  export type UserRepoStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepoStat
     */
    select?: UserRepoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepoStat
     */
    omit?: UserRepoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepoStatInclude<ExtArgs> | null
    /**
     * Filter, which UserRepoStat to fetch.
     */
    where?: UserRepoStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRepoStats to fetch.
     */
    orderBy?: UserRepoStatOrderByWithRelationInput | UserRepoStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRepoStats.
     */
    cursor?: UserRepoStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRepoStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRepoStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRepoStats.
     */
    distinct?: UserRepoStatScalarFieldEnum | UserRepoStatScalarFieldEnum[]
  }

  /**
   * UserRepoStat findFirstOrThrow
   */
  export type UserRepoStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepoStat
     */
    select?: UserRepoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepoStat
     */
    omit?: UserRepoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepoStatInclude<ExtArgs> | null
    /**
     * Filter, which UserRepoStat to fetch.
     */
    where?: UserRepoStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRepoStats to fetch.
     */
    orderBy?: UserRepoStatOrderByWithRelationInput | UserRepoStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRepoStats.
     */
    cursor?: UserRepoStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRepoStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRepoStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRepoStats.
     */
    distinct?: UserRepoStatScalarFieldEnum | UserRepoStatScalarFieldEnum[]
  }

  /**
   * UserRepoStat findMany
   */
  export type UserRepoStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepoStat
     */
    select?: UserRepoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepoStat
     */
    omit?: UserRepoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepoStatInclude<ExtArgs> | null
    /**
     * Filter, which UserRepoStats to fetch.
     */
    where?: UserRepoStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRepoStats to fetch.
     */
    orderBy?: UserRepoStatOrderByWithRelationInput | UserRepoStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRepoStats.
     */
    cursor?: UserRepoStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRepoStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRepoStats.
     */
    skip?: number
    distinct?: UserRepoStatScalarFieldEnum | UserRepoStatScalarFieldEnum[]
  }

  /**
   * UserRepoStat create
   */
  export type UserRepoStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepoStat
     */
    select?: UserRepoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepoStat
     */
    omit?: UserRepoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepoStatInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRepoStat.
     */
    data: XOR<UserRepoStatCreateInput, UserRepoStatUncheckedCreateInput>
  }

  /**
   * UserRepoStat createMany
   */
  export type UserRepoStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRepoStats.
     */
    data: UserRepoStatCreateManyInput | UserRepoStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRepoStat createManyAndReturn
   */
  export type UserRepoStatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepoStat
     */
    select?: UserRepoStatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepoStat
     */
    omit?: UserRepoStatOmit<ExtArgs> | null
    /**
     * The data used to create many UserRepoStats.
     */
    data: UserRepoStatCreateManyInput | UserRepoStatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepoStatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRepoStat update
   */
  export type UserRepoStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepoStat
     */
    select?: UserRepoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepoStat
     */
    omit?: UserRepoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepoStatInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRepoStat.
     */
    data: XOR<UserRepoStatUpdateInput, UserRepoStatUncheckedUpdateInput>
    /**
     * Choose, which UserRepoStat to update.
     */
    where: UserRepoStatWhereUniqueInput
  }

  /**
   * UserRepoStat updateMany
   */
  export type UserRepoStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRepoStats.
     */
    data: XOR<UserRepoStatUpdateManyMutationInput, UserRepoStatUncheckedUpdateManyInput>
    /**
     * Filter which UserRepoStats to update
     */
    where?: UserRepoStatWhereInput
    /**
     * Limit how many UserRepoStats to update.
     */
    limit?: number
  }

  /**
   * UserRepoStat updateManyAndReturn
   */
  export type UserRepoStatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepoStat
     */
    select?: UserRepoStatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepoStat
     */
    omit?: UserRepoStatOmit<ExtArgs> | null
    /**
     * The data used to update UserRepoStats.
     */
    data: XOR<UserRepoStatUpdateManyMutationInput, UserRepoStatUncheckedUpdateManyInput>
    /**
     * Filter which UserRepoStats to update
     */
    where?: UserRepoStatWhereInput
    /**
     * Limit how many UserRepoStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepoStatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRepoStat upsert
   */
  export type UserRepoStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepoStat
     */
    select?: UserRepoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepoStat
     */
    omit?: UserRepoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepoStatInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRepoStat to update in case it exists.
     */
    where: UserRepoStatWhereUniqueInput
    /**
     * In case the UserRepoStat found by the `where` argument doesn't exist, create a new UserRepoStat with this data.
     */
    create: XOR<UserRepoStatCreateInput, UserRepoStatUncheckedCreateInput>
    /**
     * In case the UserRepoStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRepoStatUpdateInput, UserRepoStatUncheckedUpdateInput>
  }

  /**
   * UserRepoStat delete
   */
  export type UserRepoStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepoStat
     */
    select?: UserRepoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepoStat
     */
    omit?: UserRepoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepoStatInclude<ExtArgs> | null
    /**
     * Filter which UserRepoStat to delete.
     */
    where: UserRepoStatWhereUniqueInput
  }

  /**
   * UserRepoStat deleteMany
   */
  export type UserRepoStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRepoStats to delete
     */
    where?: UserRepoStatWhereInput
    /**
     * Limit how many UserRepoStats to delete.
     */
    limit?: number
  }

  /**
   * UserRepoStat without action
   */
  export type UserRepoStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepoStat
     */
    select?: UserRepoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepoStat
     */
    omit?: UserRepoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepoStatInclude<ExtArgs> | null
  }


  /**
   * Model RecommendedRepo
   */

  export type AggregateRecommendedRepo = {
    _count: RecommendedRepoCountAggregateOutputType | null
    _avg: RecommendedRepoAvgAggregateOutputType | null
    _sum: RecommendedRepoSumAggregateOutputType | null
    _min: RecommendedRepoMinAggregateOutputType | null
    _max: RecommendedRepoMaxAggregateOutputType | null
  }

  export type RecommendedRepoAvgAggregateOutputType = {
    score: number | null
  }

  export type RecommendedRepoSumAggregateOutputType = {
    score: number | null
  }

  export type RecommendedRepoMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    repo_id: string | null
    score: number | null
    recommended_at: Date | null
  }

  export type RecommendedRepoMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    repo_id: string | null
    score: number | null
    recommended_at: Date | null
  }

  export type RecommendedRepoCountAggregateOutputType = {
    id: number
    user_id: number
    repo_id: number
    score: number
    recommended_at: number
    tags_matched: number
    _all: number
  }


  export type RecommendedRepoAvgAggregateInputType = {
    score?: true
  }

  export type RecommendedRepoSumAggregateInputType = {
    score?: true
  }

  export type RecommendedRepoMinAggregateInputType = {
    id?: true
    user_id?: true
    repo_id?: true
    score?: true
    recommended_at?: true
  }

  export type RecommendedRepoMaxAggregateInputType = {
    id?: true
    user_id?: true
    repo_id?: true
    score?: true
    recommended_at?: true
  }

  export type RecommendedRepoCountAggregateInputType = {
    id?: true
    user_id?: true
    repo_id?: true
    score?: true
    recommended_at?: true
    tags_matched?: true
    _all?: true
  }

  export type RecommendedRepoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecommendedRepo to aggregate.
     */
    where?: RecommendedRepoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendedRepos to fetch.
     */
    orderBy?: RecommendedRepoOrderByWithRelationInput | RecommendedRepoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendedRepoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendedRepos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendedRepos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecommendedRepos
    **/
    _count?: true | RecommendedRepoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecommendedRepoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecommendedRepoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendedRepoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendedRepoMaxAggregateInputType
  }

  export type GetRecommendedRepoAggregateType<T extends RecommendedRepoAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendedRepo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendedRepo[P]>
      : GetScalarType<T[P], AggregateRecommendedRepo[P]>
  }




  export type RecommendedRepoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendedRepoWhereInput
    orderBy?: RecommendedRepoOrderByWithAggregationInput | RecommendedRepoOrderByWithAggregationInput[]
    by: RecommendedRepoScalarFieldEnum[] | RecommendedRepoScalarFieldEnum
    having?: RecommendedRepoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendedRepoCountAggregateInputType | true
    _avg?: RecommendedRepoAvgAggregateInputType
    _sum?: RecommendedRepoSumAggregateInputType
    _min?: RecommendedRepoMinAggregateInputType
    _max?: RecommendedRepoMaxAggregateInputType
  }

  export type RecommendedRepoGroupByOutputType = {
    id: string
    user_id: string
    repo_id: string
    score: number | null
    recommended_at: Date
    tags_matched: JsonValue | null
    _count: RecommendedRepoCountAggregateOutputType | null
    _avg: RecommendedRepoAvgAggregateOutputType | null
    _sum: RecommendedRepoSumAggregateOutputType | null
    _min: RecommendedRepoMinAggregateOutputType | null
    _max: RecommendedRepoMaxAggregateOutputType | null
  }

  type GetRecommendedRepoGroupByPayload<T extends RecommendedRepoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendedRepoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendedRepoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendedRepoGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendedRepoGroupByOutputType[P]>
        }
      >
    >


  export type RecommendedRepoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    repo_id?: boolean
    score?: boolean
    recommended_at?: boolean
    tags_matched?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendedRepo"]>

  export type RecommendedRepoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    repo_id?: boolean
    score?: boolean
    recommended_at?: boolean
    tags_matched?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendedRepo"]>

  export type RecommendedRepoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    repo_id?: boolean
    score?: boolean
    recommended_at?: boolean
    tags_matched?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendedRepo"]>

  export type RecommendedRepoSelectScalar = {
    id?: boolean
    user_id?: boolean
    repo_id?: boolean
    score?: boolean
    recommended_at?: boolean
    tags_matched?: boolean
  }

  export type RecommendedRepoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "repo_id" | "score" | "recommended_at" | "tags_matched", ExtArgs["result"]["recommendedRepo"]>
  export type RecommendedRepoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecommendedRepoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecommendedRepoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecommendedRepoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecommendedRepo"
    objects: {
      repo: Prisma.$RepositoryPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      repo_id: string
      score: number | null
      recommended_at: Date
      tags_matched: Prisma.JsonValue | null
    }, ExtArgs["result"]["recommendedRepo"]>
    composites: {}
  }

  type RecommendedRepoGetPayload<S extends boolean | null | undefined | RecommendedRepoDefaultArgs> = $Result.GetResult<Prisma.$RecommendedRepoPayload, S>

  type RecommendedRepoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecommendedRepoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecommendedRepoCountAggregateInputType | true
    }

  export interface RecommendedRepoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecommendedRepo'], meta: { name: 'RecommendedRepo' } }
    /**
     * Find zero or one RecommendedRepo that matches the filter.
     * @param {RecommendedRepoFindUniqueArgs} args - Arguments to find a RecommendedRepo
     * @example
     * // Get one RecommendedRepo
     * const recommendedRepo = await prisma.recommendedRepo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendedRepoFindUniqueArgs>(args: SelectSubset<T, RecommendedRepoFindUniqueArgs<ExtArgs>>): Prisma__RecommendedRepoClient<$Result.GetResult<Prisma.$RecommendedRepoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecommendedRepo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecommendedRepoFindUniqueOrThrowArgs} args - Arguments to find a RecommendedRepo
     * @example
     * // Get one RecommendedRepo
     * const recommendedRepo = await prisma.recommendedRepo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendedRepoFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendedRepoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendedRepoClient<$Result.GetResult<Prisma.$RecommendedRepoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecommendedRepo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendedRepoFindFirstArgs} args - Arguments to find a RecommendedRepo
     * @example
     * // Get one RecommendedRepo
     * const recommendedRepo = await prisma.recommendedRepo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendedRepoFindFirstArgs>(args?: SelectSubset<T, RecommendedRepoFindFirstArgs<ExtArgs>>): Prisma__RecommendedRepoClient<$Result.GetResult<Prisma.$RecommendedRepoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecommendedRepo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendedRepoFindFirstOrThrowArgs} args - Arguments to find a RecommendedRepo
     * @example
     * // Get one RecommendedRepo
     * const recommendedRepo = await prisma.recommendedRepo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendedRepoFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendedRepoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendedRepoClient<$Result.GetResult<Prisma.$RecommendedRepoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecommendedRepos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendedRepoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecommendedRepos
     * const recommendedRepos = await prisma.recommendedRepo.findMany()
     * 
     * // Get first 10 RecommendedRepos
     * const recommendedRepos = await prisma.recommendedRepo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendedRepoWithIdOnly = await prisma.recommendedRepo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendedRepoFindManyArgs>(args?: SelectSubset<T, RecommendedRepoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendedRepoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecommendedRepo.
     * @param {RecommendedRepoCreateArgs} args - Arguments to create a RecommendedRepo.
     * @example
     * // Create one RecommendedRepo
     * const RecommendedRepo = await prisma.recommendedRepo.create({
     *   data: {
     *     // ... data to create a RecommendedRepo
     *   }
     * })
     * 
     */
    create<T extends RecommendedRepoCreateArgs>(args: SelectSubset<T, RecommendedRepoCreateArgs<ExtArgs>>): Prisma__RecommendedRepoClient<$Result.GetResult<Prisma.$RecommendedRepoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecommendedRepos.
     * @param {RecommendedRepoCreateManyArgs} args - Arguments to create many RecommendedRepos.
     * @example
     * // Create many RecommendedRepos
     * const recommendedRepo = await prisma.recommendedRepo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendedRepoCreateManyArgs>(args?: SelectSubset<T, RecommendedRepoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecommendedRepos and returns the data saved in the database.
     * @param {RecommendedRepoCreateManyAndReturnArgs} args - Arguments to create many RecommendedRepos.
     * @example
     * // Create many RecommendedRepos
     * const recommendedRepo = await prisma.recommendedRepo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecommendedRepos and only return the `id`
     * const recommendedRepoWithIdOnly = await prisma.recommendedRepo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendedRepoCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendedRepoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendedRepoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecommendedRepo.
     * @param {RecommendedRepoDeleteArgs} args - Arguments to delete one RecommendedRepo.
     * @example
     * // Delete one RecommendedRepo
     * const RecommendedRepo = await prisma.recommendedRepo.delete({
     *   where: {
     *     // ... filter to delete one RecommendedRepo
     *   }
     * })
     * 
     */
    delete<T extends RecommendedRepoDeleteArgs>(args: SelectSubset<T, RecommendedRepoDeleteArgs<ExtArgs>>): Prisma__RecommendedRepoClient<$Result.GetResult<Prisma.$RecommendedRepoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecommendedRepo.
     * @param {RecommendedRepoUpdateArgs} args - Arguments to update one RecommendedRepo.
     * @example
     * // Update one RecommendedRepo
     * const recommendedRepo = await prisma.recommendedRepo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendedRepoUpdateArgs>(args: SelectSubset<T, RecommendedRepoUpdateArgs<ExtArgs>>): Prisma__RecommendedRepoClient<$Result.GetResult<Prisma.$RecommendedRepoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecommendedRepos.
     * @param {RecommendedRepoDeleteManyArgs} args - Arguments to filter RecommendedRepos to delete.
     * @example
     * // Delete a few RecommendedRepos
     * const { count } = await prisma.recommendedRepo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendedRepoDeleteManyArgs>(args?: SelectSubset<T, RecommendedRepoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecommendedRepos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendedRepoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecommendedRepos
     * const recommendedRepo = await prisma.recommendedRepo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendedRepoUpdateManyArgs>(args: SelectSubset<T, RecommendedRepoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecommendedRepos and returns the data updated in the database.
     * @param {RecommendedRepoUpdateManyAndReturnArgs} args - Arguments to update many RecommendedRepos.
     * @example
     * // Update many RecommendedRepos
     * const recommendedRepo = await prisma.recommendedRepo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecommendedRepos and only return the `id`
     * const recommendedRepoWithIdOnly = await prisma.recommendedRepo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecommendedRepoUpdateManyAndReturnArgs>(args: SelectSubset<T, RecommendedRepoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendedRepoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecommendedRepo.
     * @param {RecommendedRepoUpsertArgs} args - Arguments to update or create a RecommendedRepo.
     * @example
     * // Update or create a RecommendedRepo
     * const recommendedRepo = await prisma.recommendedRepo.upsert({
     *   create: {
     *     // ... data to create a RecommendedRepo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecommendedRepo we want to update
     *   }
     * })
     */
    upsert<T extends RecommendedRepoUpsertArgs>(args: SelectSubset<T, RecommendedRepoUpsertArgs<ExtArgs>>): Prisma__RecommendedRepoClient<$Result.GetResult<Prisma.$RecommendedRepoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecommendedRepos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendedRepoCountArgs} args - Arguments to filter RecommendedRepos to count.
     * @example
     * // Count the number of RecommendedRepos
     * const count = await prisma.recommendedRepo.count({
     *   where: {
     *     // ... the filter for the RecommendedRepos we want to count
     *   }
     * })
    **/
    count<T extends RecommendedRepoCountArgs>(
      args?: Subset<T, RecommendedRepoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendedRepoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecommendedRepo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendedRepoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecommendedRepoAggregateArgs>(args: Subset<T, RecommendedRepoAggregateArgs>): Prisma.PrismaPromise<GetRecommendedRepoAggregateType<T>>

    /**
     * Group by RecommendedRepo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendedRepoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecommendedRepoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendedRepoGroupByArgs['orderBy'] }
        : { orderBy?: RecommendedRepoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecommendedRepoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendedRepoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecommendedRepo model
   */
  readonly fields: RecommendedRepoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecommendedRepo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendedRepoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repo<T extends RepositoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepositoryDefaultArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecommendedRepo model
   */
  interface RecommendedRepoFieldRefs {
    readonly id: FieldRef<"RecommendedRepo", 'String'>
    readonly user_id: FieldRef<"RecommendedRepo", 'String'>
    readonly repo_id: FieldRef<"RecommendedRepo", 'String'>
    readonly score: FieldRef<"RecommendedRepo", 'Float'>
    readonly recommended_at: FieldRef<"RecommendedRepo", 'DateTime'>
    readonly tags_matched: FieldRef<"RecommendedRepo", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * RecommendedRepo findUnique
   */
  export type RecommendedRepoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedRepo
     */
    select?: RecommendedRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedRepo
     */
    omit?: RecommendedRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedRepoInclude<ExtArgs> | null
    /**
     * Filter, which RecommendedRepo to fetch.
     */
    where: RecommendedRepoWhereUniqueInput
  }

  /**
   * RecommendedRepo findUniqueOrThrow
   */
  export type RecommendedRepoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedRepo
     */
    select?: RecommendedRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedRepo
     */
    omit?: RecommendedRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedRepoInclude<ExtArgs> | null
    /**
     * Filter, which RecommendedRepo to fetch.
     */
    where: RecommendedRepoWhereUniqueInput
  }

  /**
   * RecommendedRepo findFirst
   */
  export type RecommendedRepoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedRepo
     */
    select?: RecommendedRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedRepo
     */
    omit?: RecommendedRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedRepoInclude<ExtArgs> | null
    /**
     * Filter, which RecommendedRepo to fetch.
     */
    where?: RecommendedRepoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendedRepos to fetch.
     */
    orderBy?: RecommendedRepoOrderByWithRelationInput | RecommendedRepoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecommendedRepos.
     */
    cursor?: RecommendedRepoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendedRepos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendedRepos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecommendedRepos.
     */
    distinct?: RecommendedRepoScalarFieldEnum | RecommendedRepoScalarFieldEnum[]
  }

  /**
   * RecommendedRepo findFirstOrThrow
   */
  export type RecommendedRepoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedRepo
     */
    select?: RecommendedRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedRepo
     */
    omit?: RecommendedRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedRepoInclude<ExtArgs> | null
    /**
     * Filter, which RecommendedRepo to fetch.
     */
    where?: RecommendedRepoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendedRepos to fetch.
     */
    orderBy?: RecommendedRepoOrderByWithRelationInput | RecommendedRepoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecommendedRepos.
     */
    cursor?: RecommendedRepoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendedRepos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendedRepos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecommendedRepos.
     */
    distinct?: RecommendedRepoScalarFieldEnum | RecommendedRepoScalarFieldEnum[]
  }

  /**
   * RecommendedRepo findMany
   */
  export type RecommendedRepoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedRepo
     */
    select?: RecommendedRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedRepo
     */
    omit?: RecommendedRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedRepoInclude<ExtArgs> | null
    /**
     * Filter, which RecommendedRepos to fetch.
     */
    where?: RecommendedRepoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendedRepos to fetch.
     */
    orderBy?: RecommendedRepoOrderByWithRelationInput | RecommendedRepoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecommendedRepos.
     */
    cursor?: RecommendedRepoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendedRepos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendedRepos.
     */
    skip?: number
    distinct?: RecommendedRepoScalarFieldEnum | RecommendedRepoScalarFieldEnum[]
  }

  /**
   * RecommendedRepo create
   */
  export type RecommendedRepoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedRepo
     */
    select?: RecommendedRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedRepo
     */
    omit?: RecommendedRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedRepoInclude<ExtArgs> | null
    /**
     * The data needed to create a RecommendedRepo.
     */
    data: XOR<RecommendedRepoCreateInput, RecommendedRepoUncheckedCreateInput>
  }

  /**
   * RecommendedRepo createMany
   */
  export type RecommendedRepoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecommendedRepos.
     */
    data: RecommendedRepoCreateManyInput | RecommendedRepoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecommendedRepo createManyAndReturn
   */
  export type RecommendedRepoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedRepo
     */
    select?: RecommendedRepoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedRepo
     */
    omit?: RecommendedRepoOmit<ExtArgs> | null
    /**
     * The data used to create many RecommendedRepos.
     */
    data: RecommendedRepoCreateManyInput | RecommendedRepoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedRepoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecommendedRepo update
   */
  export type RecommendedRepoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedRepo
     */
    select?: RecommendedRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedRepo
     */
    omit?: RecommendedRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedRepoInclude<ExtArgs> | null
    /**
     * The data needed to update a RecommendedRepo.
     */
    data: XOR<RecommendedRepoUpdateInput, RecommendedRepoUncheckedUpdateInput>
    /**
     * Choose, which RecommendedRepo to update.
     */
    where: RecommendedRepoWhereUniqueInput
  }

  /**
   * RecommendedRepo updateMany
   */
  export type RecommendedRepoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecommendedRepos.
     */
    data: XOR<RecommendedRepoUpdateManyMutationInput, RecommendedRepoUncheckedUpdateManyInput>
    /**
     * Filter which RecommendedRepos to update
     */
    where?: RecommendedRepoWhereInput
    /**
     * Limit how many RecommendedRepos to update.
     */
    limit?: number
  }

  /**
   * RecommendedRepo updateManyAndReturn
   */
  export type RecommendedRepoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedRepo
     */
    select?: RecommendedRepoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedRepo
     */
    omit?: RecommendedRepoOmit<ExtArgs> | null
    /**
     * The data used to update RecommendedRepos.
     */
    data: XOR<RecommendedRepoUpdateManyMutationInput, RecommendedRepoUncheckedUpdateManyInput>
    /**
     * Filter which RecommendedRepos to update
     */
    where?: RecommendedRepoWhereInput
    /**
     * Limit how many RecommendedRepos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedRepoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecommendedRepo upsert
   */
  export type RecommendedRepoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedRepo
     */
    select?: RecommendedRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedRepo
     */
    omit?: RecommendedRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedRepoInclude<ExtArgs> | null
    /**
     * The filter to search for the RecommendedRepo to update in case it exists.
     */
    where: RecommendedRepoWhereUniqueInput
    /**
     * In case the RecommendedRepo found by the `where` argument doesn't exist, create a new RecommendedRepo with this data.
     */
    create: XOR<RecommendedRepoCreateInput, RecommendedRepoUncheckedCreateInput>
    /**
     * In case the RecommendedRepo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendedRepoUpdateInput, RecommendedRepoUncheckedUpdateInput>
  }

  /**
   * RecommendedRepo delete
   */
  export type RecommendedRepoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedRepo
     */
    select?: RecommendedRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedRepo
     */
    omit?: RecommendedRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedRepoInclude<ExtArgs> | null
    /**
     * Filter which RecommendedRepo to delete.
     */
    where: RecommendedRepoWhereUniqueInput
  }

  /**
   * RecommendedRepo deleteMany
   */
  export type RecommendedRepoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecommendedRepos to delete
     */
    where?: RecommendedRepoWhereInput
    /**
     * Limit how many RecommendedRepos to delete.
     */
    limit?: number
  }

  /**
   * RecommendedRepo without action
   */
  export type RecommendedRepoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedRepo
     */
    select?: RecommendedRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedRepo
     */
    omit?: RecommendedRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedRepoInclude<ExtArgs> | null
  }


  /**
   * Model RepoFetchHistory
   */

  export type AggregateRepoFetchHistory = {
    _count: RepoFetchHistoryCountAggregateOutputType | null
    _min: RepoFetchHistoryMinAggregateOutputType | null
    _max: RepoFetchHistoryMaxAggregateOutputType | null
  }

  export type RepoFetchHistoryMinAggregateOutputType = {
    id: string | null
    repo_id: string | null
    fetched_at: Date | null
    status: string | null
  }

  export type RepoFetchHistoryMaxAggregateOutputType = {
    id: string | null
    repo_id: string | null
    fetched_at: Date | null
    status: string | null
  }

  export type RepoFetchHistoryCountAggregateOutputType = {
    id: number
    repo_id: number
    fetched_at: number
    status: number
    raw_metadata: number
    _all: number
  }


  export type RepoFetchHistoryMinAggregateInputType = {
    id?: true
    repo_id?: true
    fetched_at?: true
    status?: true
  }

  export type RepoFetchHistoryMaxAggregateInputType = {
    id?: true
    repo_id?: true
    fetched_at?: true
    status?: true
  }

  export type RepoFetchHistoryCountAggregateInputType = {
    id?: true
    repo_id?: true
    fetched_at?: true
    status?: true
    raw_metadata?: true
    _all?: true
  }

  export type RepoFetchHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepoFetchHistory to aggregate.
     */
    where?: RepoFetchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepoFetchHistories to fetch.
     */
    orderBy?: RepoFetchHistoryOrderByWithRelationInput | RepoFetchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepoFetchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepoFetchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepoFetchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RepoFetchHistories
    **/
    _count?: true | RepoFetchHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepoFetchHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepoFetchHistoryMaxAggregateInputType
  }

  export type GetRepoFetchHistoryAggregateType<T extends RepoFetchHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRepoFetchHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepoFetchHistory[P]>
      : GetScalarType<T[P], AggregateRepoFetchHistory[P]>
  }




  export type RepoFetchHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepoFetchHistoryWhereInput
    orderBy?: RepoFetchHistoryOrderByWithAggregationInput | RepoFetchHistoryOrderByWithAggregationInput[]
    by: RepoFetchHistoryScalarFieldEnum[] | RepoFetchHistoryScalarFieldEnum
    having?: RepoFetchHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepoFetchHistoryCountAggregateInputType | true
    _min?: RepoFetchHistoryMinAggregateInputType
    _max?: RepoFetchHistoryMaxAggregateInputType
  }

  export type RepoFetchHistoryGroupByOutputType = {
    id: string
    repo_id: string
    fetched_at: Date
    status: string
    raw_metadata: JsonValue | null
    _count: RepoFetchHistoryCountAggregateOutputType | null
    _min: RepoFetchHistoryMinAggregateOutputType | null
    _max: RepoFetchHistoryMaxAggregateOutputType | null
  }

  type GetRepoFetchHistoryGroupByPayload<T extends RepoFetchHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepoFetchHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepoFetchHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepoFetchHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], RepoFetchHistoryGroupByOutputType[P]>
        }
      >
    >


  export type RepoFetchHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repo_id?: boolean
    fetched_at?: boolean
    status?: boolean
    raw_metadata?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repoFetchHistory"]>

  export type RepoFetchHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repo_id?: boolean
    fetched_at?: boolean
    status?: boolean
    raw_metadata?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repoFetchHistory"]>

  export type RepoFetchHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repo_id?: boolean
    fetched_at?: boolean
    status?: boolean
    raw_metadata?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repoFetchHistory"]>

  export type RepoFetchHistorySelectScalar = {
    id?: boolean
    repo_id?: boolean
    fetched_at?: boolean
    status?: boolean
    raw_metadata?: boolean
  }

  export type RepoFetchHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "repo_id" | "fetched_at" | "status" | "raw_metadata", ExtArgs["result"]["repoFetchHistory"]>
  export type RepoFetchHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
  }
  export type RepoFetchHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
  }
  export type RepoFetchHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
  }

  export type $RepoFetchHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepoFetchHistory"
    objects: {
      repo: Prisma.$RepositoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      repo_id: string
      fetched_at: Date
      status: string
      raw_metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["repoFetchHistory"]>
    composites: {}
  }

  type RepoFetchHistoryGetPayload<S extends boolean | null | undefined | RepoFetchHistoryDefaultArgs> = $Result.GetResult<Prisma.$RepoFetchHistoryPayload, S>

  type RepoFetchHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepoFetchHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepoFetchHistoryCountAggregateInputType | true
    }

  export interface RepoFetchHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RepoFetchHistory'], meta: { name: 'RepoFetchHistory' } }
    /**
     * Find zero or one RepoFetchHistory that matches the filter.
     * @param {RepoFetchHistoryFindUniqueArgs} args - Arguments to find a RepoFetchHistory
     * @example
     * // Get one RepoFetchHistory
     * const repoFetchHistory = await prisma.repoFetchHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepoFetchHistoryFindUniqueArgs>(args: SelectSubset<T, RepoFetchHistoryFindUniqueArgs<ExtArgs>>): Prisma__RepoFetchHistoryClient<$Result.GetResult<Prisma.$RepoFetchHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RepoFetchHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepoFetchHistoryFindUniqueOrThrowArgs} args - Arguments to find a RepoFetchHistory
     * @example
     * // Get one RepoFetchHistory
     * const repoFetchHistory = await prisma.repoFetchHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepoFetchHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RepoFetchHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepoFetchHistoryClient<$Result.GetResult<Prisma.$RepoFetchHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepoFetchHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepoFetchHistoryFindFirstArgs} args - Arguments to find a RepoFetchHistory
     * @example
     * // Get one RepoFetchHistory
     * const repoFetchHistory = await prisma.repoFetchHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepoFetchHistoryFindFirstArgs>(args?: SelectSubset<T, RepoFetchHistoryFindFirstArgs<ExtArgs>>): Prisma__RepoFetchHistoryClient<$Result.GetResult<Prisma.$RepoFetchHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepoFetchHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepoFetchHistoryFindFirstOrThrowArgs} args - Arguments to find a RepoFetchHistory
     * @example
     * // Get one RepoFetchHistory
     * const repoFetchHistory = await prisma.repoFetchHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepoFetchHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RepoFetchHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepoFetchHistoryClient<$Result.GetResult<Prisma.$RepoFetchHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepoFetchHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepoFetchHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepoFetchHistories
     * const repoFetchHistories = await prisma.repoFetchHistory.findMany()
     * 
     * // Get first 10 RepoFetchHistories
     * const repoFetchHistories = await prisma.repoFetchHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repoFetchHistoryWithIdOnly = await prisma.repoFetchHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepoFetchHistoryFindManyArgs>(args?: SelectSubset<T, RepoFetchHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepoFetchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RepoFetchHistory.
     * @param {RepoFetchHistoryCreateArgs} args - Arguments to create a RepoFetchHistory.
     * @example
     * // Create one RepoFetchHistory
     * const RepoFetchHistory = await prisma.repoFetchHistory.create({
     *   data: {
     *     // ... data to create a RepoFetchHistory
     *   }
     * })
     * 
     */
    create<T extends RepoFetchHistoryCreateArgs>(args: SelectSubset<T, RepoFetchHistoryCreateArgs<ExtArgs>>): Prisma__RepoFetchHistoryClient<$Result.GetResult<Prisma.$RepoFetchHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RepoFetchHistories.
     * @param {RepoFetchHistoryCreateManyArgs} args - Arguments to create many RepoFetchHistories.
     * @example
     * // Create many RepoFetchHistories
     * const repoFetchHistory = await prisma.repoFetchHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepoFetchHistoryCreateManyArgs>(args?: SelectSubset<T, RepoFetchHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RepoFetchHistories and returns the data saved in the database.
     * @param {RepoFetchHistoryCreateManyAndReturnArgs} args - Arguments to create many RepoFetchHistories.
     * @example
     * // Create many RepoFetchHistories
     * const repoFetchHistory = await prisma.repoFetchHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RepoFetchHistories and only return the `id`
     * const repoFetchHistoryWithIdOnly = await prisma.repoFetchHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepoFetchHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RepoFetchHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepoFetchHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RepoFetchHistory.
     * @param {RepoFetchHistoryDeleteArgs} args - Arguments to delete one RepoFetchHistory.
     * @example
     * // Delete one RepoFetchHistory
     * const RepoFetchHistory = await prisma.repoFetchHistory.delete({
     *   where: {
     *     // ... filter to delete one RepoFetchHistory
     *   }
     * })
     * 
     */
    delete<T extends RepoFetchHistoryDeleteArgs>(args: SelectSubset<T, RepoFetchHistoryDeleteArgs<ExtArgs>>): Prisma__RepoFetchHistoryClient<$Result.GetResult<Prisma.$RepoFetchHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RepoFetchHistory.
     * @param {RepoFetchHistoryUpdateArgs} args - Arguments to update one RepoFetchHistory.
     * @example
     * // Update one RepoFetchHistory
     * const repoFetchHistory = await prisma.repoFetchHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepoFetchHistoryUpdateArgs>(args: SelectSubset<T, RepoFetchHistoryUpdateArgs<ExtArgs>>): Prisma__RepoFetchHistoryClient<$Result.GetResult<Prisma.$RepoFetchHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RepoFetchHistories.
     * @param {RepoFetchHistoryDeleteManyArgs} args - Arguments to filter RepoFetchHistories to delete.
     * @example
     * // Delete a few RepoFetchHistories
     * const { count } = await prisma.repoFetchHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepoFetchHistoryDeleteManyArgs>(args?: SelectSubset<T, RepoFetchHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepoFetchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepoFetchHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepoFetchHistories
     * const repoFetchHistory = await prisma.repoFetchHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepoFetchHistoryUpdateManyArgs>(args: SelectSubset<T, RepoFetchHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepoFetchHistories and returns the data updated in the database.
     * @param {RepoFetchHistoryUpdateManyAndReturnArgs} args - Arguments to update many RepoFetchHistories.
     * @example
     * // Update many RepoFetchHistories
     * const repoFetchHistory = await prisma.repoFetchHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RepoFetchHistories and only return the `id`
     * const repoFetchHistoryWithIdOnly = await prisma.repoFetchHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepoFetchHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RepoFetchHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepoFetchHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RepoFetchHistory.
     * @param {RepoFetchHistoryUpsertArgs} args - Arguments to update or create a RepoFetchHistory.
     * @example
     * // Update or create a RepoFetchHistory
     * const repoFetchHistory = await prisma.repoFetchHistory.upsert({
     *   create: {
     *     // ... data to create a RepoFetchHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepoFetchHistory we want to update
     *   }
     * })
     */
    upsert<T extends RepoFetchHistoryUpsertArgs>(args: SelectSubset<T, RepoFetchHistoryUpsertArgs<ExtArgs>>): Prisma__RepoFetchHistoryClient<$Result.GetResult<Prisma.$RepoFetchHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RepoFetchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepoFetchHistoryCountArgs} args - Arguments to filter RepoFetchHistories to count.
     * @example
     * // Count the number of RepoFetchHistories
     * const count = await prisma.repoFetchHistory.count({
     *   where: {
     *     // ... the filter for the RepoFetchHistories we want to count
     *   }
     * })
    **/
    count<T extends RepoFetchHistoryCountArgs>(
      args?: Subset<T, RepoFetchHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepoFetchHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepoFetchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepoFetchHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepoFetchHistoryAggregateArgs>(args: Subset<T, RepoFetchHistoryAggregateArgs>): Prisma.PrismaPromise<GetRepoFetchHistoryAggregateType<T>>

    /**
     * Group by RepoFetchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepoFetchHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepoFetchHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepoFetchHistoryGroupByArgs['orderBy'] }
        : { orderBy?: RepoFetchHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepoFetchHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepoFetchHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RepoFetchHistory model
   */
  readonly fields: RepoFetchHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RepoFetchHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepoFetchHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repo<T extends RepositoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepositoryDefaultArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RepoFetchHistory model
   */
  interface RepoFetchHistoryFieldRefs {
    readonly id: FieldRef<"RepoFetchHistory", 'String'>
    readonly repo_id: FieldRef<"RepoFetchHistory", 'String'>
    readonly fetched_at: FieldRef<"RepoFetchHistory", 'DateTime'>
    readonly status: FieldRef<"RepoFetchHistory", 'String'>
    readonly raw_metadata: FieldRef<"RepoFetchHistory", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * RepoFetchHistory findUnique
   */
  export type RepoFetchHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoFetchHistory
     */
    select?: RepoFetchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoFetchHistory
     */
    omit?: RepoFetchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoFetchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RepoFetchHistory to fetch.
     */
    where: RepoFetchHistoryWhereUniqueInput
  }

  /**
   * RepoFetchHistory findUniqueOrThrow
   */
  export type RepoFetchHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoFetchHistory
     */
    select?: RepoFetchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoFetchHistory
     */
    omit?: RepoFetchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoFetchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RepoFetchHistory to fetch.
     */
    where: RepoFetchHistoryWhereUniqueInput
  }

  /**
   * RepoFetchHistory findFirst
   */
  export type RepoFetchHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoFetchHistory
     */
    select?: RepoFetchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoFetchHistory
     */
    omit?: RepoFetchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoFetchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RepoFetchHistory to fetch.
     */
    where?: RepoFetchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepoFetchHistories to fetch.
     */
    orderBy?: RepoFetchHistoryOrderByWithRelationInput | RepoFetchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepoFetchHistories.
     */
    cursor?: RepoFetchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepoFetchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepoFetchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepoFetchHistories.
     */
    distinct?: RepoFetchHistoryScalarFieldEnum | RepoFetchHistoryScalarFieldEnum[]
  }

  /**
   * RepoFetchHistory findFirstOrThrow
   */
  export type RepoFetchHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoFetchHistory
     */
    select?: RepoFetchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoFetchHistory
     */
    omit?: RepoFetchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoFetchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RepoFetchHistory to fetch.
     */
    where?: RepoFetchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepoFetchHistories to fetch.
     */
    orderBy?: RepoFetchHistoryOrderByWithRelationInput | RepoFetchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepoFetchHistories.
     */
    cursor?: RepoFetchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepoFetchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepoFetchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepoFetchHistories.
     */
    distinct?: RepoFetchHistoryScalarFieldEnum | RepoFetchHistoryScalarFieldEnum[]
  }

  /**
   * RepoFetchHistory findMany
   */
  export type RepoFetchHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoFetchHistory
     */
    select?: RepoFetchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoFetchHistory
     */
    omit?: RepoFetchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoFetchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RepoFetchHistories to fetch.
     */
    where?: RepoFetchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepoFetchHistories to fetch.
     */
    orderBy?: RepoFetchHistoryOrderByWithRelationInput | RepoFetchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RepoFetchHistories.
     */
    cursor?: RepoFetchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepoFetchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepoFetchHistories.
     */
    skip?: number
    distinct?: RepoFetchHistoryScalarFieldEnum | RepoFetchHistoryScalarFieldEnum[]
  }

  /**
   * RepoFetchHistory create
   */
  export type RepoFetchHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoFetchHistory
     */
    select?: RepoFetchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoFetchHistory
     */
    omit?: RepoFetchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoFetchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a RepoFetchHistory.
     */
    data: XOR<RepoFetchHistoryCreateInput, RepoFetchHistoryUncheckedCreateInput>
  }

  /**
   * RepoFetchHistory createMany
   */
  export type RepoFetchHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RepoFetchHistories.
     */
    data: RepoFetchHistoryCreateManyInput | RepoFetchHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepoFetchHistory createManyAndReturn
   */
  export type RepoFetchHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoFetchHistory
     */
    select?: RepoFetchHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepoFetchHistory
     */
    omit?: RepoFetchHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many RepoFetchHistories.
     */
    data: RepoFetchHistoryCreateManyInput | RepoFetchHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoFetchHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepoFetchHistory update
   */
  export type RepoFetchHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoFetchHistory
     */
    select?: RepoFetchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoFetchHistory
     */
    omit?: RepoFetchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoFetchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a RepoFetchHistory.
     */
    data: XOR<RepoFetchHistoryUpdateInput, RepoFetchHistoryUncheckedUpdateInput>
    /**
     * Choose, which RepoFetchHistory to update.
     */
    where: RepoFetchHistoryWhereUniqueInput
  }

  /**
   * RepoFetchHistory updateMany
   */
  export type RepoFetchHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RepoFetchHistories.
     */
    data: XOR<RepoFetchHistoryUpdateManyMutationInput, RepoFetchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RepoFetchHistories to update
     */
    where?: RepoFetchHistoryWhereInput
    /**
     * Limit how many RepoFetchHistories to update.
     */
    limit?: number
  }

  /**
   * RepoFetchHistory updateManyAndReturn
   */
  export type RepoFetchHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoFetchHistory
     */
    select?: RepoFetchHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepoFetchHistory
     */
    omit?: RepoFetchHistoryOmit<ExtArgs> | null
    /**
     * The data used to update RepoFetchHistories.
     */
    data: XOR<RepoFetchHistoryUpdateManyMutationInput, RepoFetchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RepoFetchHistories to update
     */
    where?: RepoFetchHistoryWhereInput
    /**
     * Limit how many RepoFetchHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoFetchHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepoFetchHistory upsert
   */
  export type RepoFetchHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoFetchHistory
     */
    select?: RepoFetchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoFetchHistory
     */
    omit?: RepoFetchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoFetchHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the RepoFetchHistory to update in case it exists.
     */
    where: RepoFetchHistoryWhereUniqueInput
    /**
     * In case the RepoFetchHistory found by the `where` argument doesn't exist, create a new RepoFetchHistory with this data.
     */
    create: XOR<RepoFetchHistoryCreateInput, RepoFetchHistoryUncheckedCreateInput>
    /**
     * In case the RepoFetchHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepoFetchHistoryUpdateInput, RepoFetchHistoryUncheckedUpdateInput>
  }

  /**
   * RepoFetchHistory delete
   */
  export type RepoFetchHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoFetchHistory
     */
    select?: RepoFetchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoFetchHistory
     */
    omit?: RepoFetchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoFetchHistoryInclude<ExtArgs> | null
    /**
     * Filter which RepoFetchHistory to delete.
     */
    where: RepoFetchHistoryWhereUniqueInput
  }

  /**
   * RepoFetchHistory deleteMany
   */
  export type RepoFetchHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepoFetchHistories to delete
     */
    where?: RepoFetchHistoryWhereInput
    /**
     * Limit how many RepoFetchHistories to delete.
     */
    limit?: number
  }

  /**
   * RepoFetchHistory without action
   */
  export type RepoFetchHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoFetchHistory
     */
    select?: RepoFetchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoFetchHistory
     */
    omit?: RepoFetchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoFetchHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    avatar_url: 'avatar_url',
    created_at: 'created_at',
    display_name: 'display_name',
    github_id: 'github_id',
    last_login_at: 'last_login_at',
    profile_url: 'profile_url',
    username: 'username'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RepositoryScalarFieldEnum: {
    id: 'id',
    github_repo_id: 'github_repo_id',
    owner: 'owner',
    name: 'name',
    full_name: 'full_name',
    html_url: 'html_url',
    description: 'description',
    primary_language: 'primary_language',
    stars_count: 'stars_count',
    forks_count: 'forks_count',
    open_issues_count: 'open_issues_count',
    is_fork: 'is_fork',
    is_private: 'is_private',
    last_pushed_at: 'last_pushed_at'
  };

  export type RepositoryScalarFieldEnum = (typeof RepositoryScalarFieldEnum)[keyof typeof RepositoryScalarFieldEnum]


  export const ContributionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    repo_id: 'repo_id',
    type: 'type',
    github_event_id: 'github_event_id',
    event_url: 'event_url',
    event_date: 'event_date',
    details: 'details',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ContributionScalarFieldEnum = (typeof ContributionScalarFieldEnum)[keyof typeof ContributionScalarFieldEnum]


  export const UserRepoStatScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    repo_id: 'repo_id',
    total_commits: 'total_commits',
    total_prs: 'total_prs',
    total_issues: 'total_issues',
    last_updated_at: 'last_updated_at'
  };

  export type UserRepoStatScalarFieldEnum = (typeof UserRepoStatScalarFieldEnum)[keyof typeof UserRepoStatScalarFieldEnum]


  export const RecommendedRepoScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    repo_id: 'repo_id',
    score: 'score',
    recommended_at: 'recommended_at',
    tags_matched: 'tags_matched'
  };

  export type RecommendedRepoScalarFieldEnum = (typeof RecommendedRepoScalarFieldEnum)[keyof typeof RecommendedRepoScalarFieldEnum]


  export const RepoFetchHistoryScalarFieldEnum: {
    id: 'id',
    repo_id: 'repo_id',
    fetched_at: 'fetched_at',
    status: 'status',
    raw_metadata: 'raw_metadata'
  };

  export type RepoFetchHistoryScalarFieldEnum = (typeof RepoFetchHistoryScalarFieldEnum)[keyof typeof RepoFetchHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    avatar_url?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    display_name?: StringNullableFilter<"User"> | string | null
    github_id?: StringFilter<"User"> | string
    last_login_at?: DateTimeNullableFilter<"User"> | Date | string | null
    profile_url?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    contributions?: ContributionListRelationFilter
    recommendedRepos?: RecommendedRepoListRelationFilter
    userRepoStats?: UserRepoStatListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    display_name?: SortOrderInput | SortOrder
    github_id?: SortOrder
    last_login_at?: SortOrderInput | SortOrder
    profile_url?: SortOrder
    username?: SortOrder
    contributions?: ContributionOrderByRelationAggregateInput
    recommendedRepos?: RecommendedRepoOrderByRelationAggregateInput
    userRepoStats?: UserRepoStatOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    github_id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringNullableFilter<"User"> | string | null
    avatar_url?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    display_name?: StringNullableFilter<"User"> | string | null
    last_login_at?: DateTimeNullableFilter<"User"> | Date | string | null
    profile_url?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    contributions?: ContributionListRelationFilter
    recommendedRepos?: RecommendedRepoListRelationFilter
    userRepoStats?: UserRepoStatListRelationFilter
  }, "id" | "github_id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    display_name?: SortOrderInput | SortOrder
    github_id?: SortOrder
    last_login_at?: SortOrderInput | SortOrder
    profile_url?: SortOrder
    username?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar_url?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    display_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    github_id?: StringWithAggregatesFilter<"User"> | string
    last_login_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    profile_url?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
  }

  export type RepositoryWhereInput = {
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    id?: StringFilter<"Repository"> | string
    github_repo_id?: StringFilter<"Repository"> | string
    owner?: StringFilter<"Repository"> | string
    name?: StringFilter<"Repository"> | string
    full_name?: StringFilter<"Repository"> | string
    html_url?: StringFilter<"Repository"> | string
    description?: StringNullableFilter<"Repository"> | string | null
    primary_language?: StringNullableFilter<"Repository"> | string | null
    stars_count?: IntNullableFilter<"Repository"> | number | null
    forks_count?: IntNullableFilter<"Repository"> | number | null
    open_issues_count?: IntNullableFilter<"Repository"> | number | null
    is_fork?: BoolFilter<"Repository"> | boolean
    is_private?: BoolFilter<"Repository"> | boolean
    last_pushed_at?: DateTimeNullableFilter<"Repository"> | Date | string | null
    contributions?: ContributionListRelationFilter
    recommendedRepos?: RecommendedRepoListRelationFilter
    fetchHistory?: RepoFetchHistoryListRelationFilter
    userRepoStats?: UserRepoStatListRelationFilter
  }

  export type RepositoryOrderByWithRelationInput = {
    id?: SortOrder
    github_repo_id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    full_name?: SortOrder
    html_url?: SortOrder
    description?: SortOrderInput | SortOrder
    primary_language?: SortOrderInput | SortOrder
    stars_count?: SortOrderInput | SortOrder
    forks_count?: SortOrderInput | SortOrder
    open_issues_count?: SortOrderInput | SortOrder
    is_fork?: SortOrder
    is_private?: SortOrder
    last_pushed_at?: SortOrderInput | SortOrder
    contributions?: ContributionOrderByRelationAggregateInput
    recommendedRepos?: RecommendedRepoOrderByRelationAggregateInput
    fetchHistory?: RepoFetchHistoryOrderByRelationAggregateInput
    userRepoStats?: UserRepoStatOrderByRelationAggregateInput
  }

  export type RepositoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    github_repo_id?: string
    full_name?: string
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    owner?: StringFilter<"Repository"> | string
    name?: StringFilter<"Repository"> | string
    html_url?: StringFilter<"Repository"> | string
    description?: StringNullableFilter<"Repository"> | string | null
    primary_language?: StringNullableFilter<"Repository"> | string | null
    stars_count?: IntNullableFilter<"Repository"> | number | null
    forks_count?: IntNullableFilter<"Repository"> | number | null
    open_issues_count?: IntNullableFilter<"Repository"> | number | null
    is_fork?: BoolFilter<"Repository"> | boolean
    is_private?: BoolFilter<"Repository"> | boolean
    last_pushed_at?: DateTimeNullableFilter<"Repository"> | Date | string | null
    contributions?: ContributionListRelationFilter
    recommendedRepos?: RecommendedRepoListRelationFilter
    fetchHistory?: RepoFetchHistoryListRelationFilter
    userRepoStats?: UserRepoStatListRelationFilter
  }, "id" | "github_repo_id" | "full_name">

  export type RepositoryOrderByWithAggregationInput = {
    id?: SortOrder
    github_repo_id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    full_name?: SortOrder
    html_url?: SortOrder
    description?: SortOrderInput | SortOrder
    primary_language?: SortOrderInput | SortOrder
    stars_count?: SortOrderInput | SortOrder
    forks_count?: SortOrderInput | SortOrder
    open_issues_count?: SortOrderInput | SortOrder
    is_fork?: SortOrder
    is_private?: SortOrder
    last_pushed_at?: SortOrderInput | SortOrder
    _count?: RepositoryCountOrderByAggregateInput
    _avg?: RepositoryAvgOrderByAggregateInput
    _max?: RepositoryMaxOrderByAggregateInput
    _min?: RepositoryMinOrderByAggregateInput
    _sum?: RepositorySumOrderByAggregateInput
  }

  export type RepositoryScalarWhereWithAggregatesInput = {
    AND?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    OR?: RepositoryScalarWhereWithAggregatesInput[]
    NOT?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Repository"> | string
    github_repo_id?: StringWithAggregatesFilter<"Repository"> | string
    owner?: StringWithAggregatesFilter<"Repository"> | string
    name?: StringWithAggregatesFilter<"Repository"> | string
    full_name?: StringWithAggregatesFilter<"Repository"> | string
    html_url?: StringWithAggregatesFilter<"Repository"> | string
    description?: StringNullableWithAggregatesFilter<"Repository"> | string | null
    primary_language?: StringNullableWithAggregatesFilter<"Repository"> | string | null
    stars_count?: IntNullableWithAggregatesFilter<"Repository"> | number | null
    forks_count?: IntNullableWithAggregatesFilter<"Repository"> | number | null
    open_issues_count?: IntNullableWithAggregatesFilter<"Repository"> | number | null
    is_fork?: BoolWithAggregatesFilter<"Repository"> | boolean
    is_private?: BoolWithAggregatesFilter<"Repository"> | boolean
    last_pushed_at?: DateTimeNullableWithAggregatesFilter<"Repository"> | Date | string | null
  }

  export type ContributionWhereInput = {
    AND?: ContributionWhereInput | ContributionWhereInput[]
    OR?: ContributionWhereInput[]
    NOT?: ContributionWhereInput | ContributionWhereInput[]
    id?: StringFilter<"Contribution"> | string
    user_id?: StringFilter<"Contribution"> | string
    repo_id?: StringFilter<"Contribution"> | string
    type?: StringFilter<"Contribution"> | string
    github_event_id?: StringNullableFilter<"Contribution"> | string | null
    event_url?: StringNullableFilter<"Contribution"> | string | null
    event_date?: DateTimeNullableFilter<"Contribution"> | Date | string | null
    details?: JsonNullableFilter<"Contribution">
    created_at?: DateTimeFilter<"Contribution"> | Date | string
    updated_at?: DateTimeFilter<"Contribution"> | Date | string
    repo?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ContributionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_id?: SortOrder
    type?: SortOrder
    github_event_id?: SortOrderInput | SortOrder
    event_url?: SortOrderInput | SortOrder
    event_date?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    repo?: RepositoryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ContributionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContributionWhereInput | ContributionWhereInput[]
    OR?: ContributionWhereInput[]
    NOT?: ContributionWhereInput | ContributionWhereInput[]
    user_id?: StringFilter<"Contribution"> | string
    repo_id?: StringFilter<"Contribution"> | string
    type?: StringFilter<"Contribution"> | string
    github_event_id?: StringNullableFilter<"Contribution"> | string | null
    event_url?: StringNullableFilter<"Contribution"> | string | null
    event_date?: DateTimeNullableFilter<"Contribution"> | Date | string | null
    details?: JsonNullableFilter<"Contribution">
    created_at?: DateTimeFilter<"Contribution"> | Date | string
    updated_at?: DateTimeFilter<"Contribution"> | Date | string
    repo?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ContributionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_id?: SortOrder
    type?: SortOrder
    github_event_id?: SortOrderInput | SortOrder
    event_url?: SortOrderInput | SortOrder
    event_date?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ContributionCountOrderByAggregateInput
    _max?: ContributionMaxOrderByAggregateInput
    _min?: ContributionMinOrderByAggregateInput
  }

  export type ContributionScalarWhereWithAggregatesInput = {
    AND?: ContributionScalarWhereWithAggregatesInput | ContributionScalarWhereWithAggregatesInput[]
    OR?: ContributionScalarWhereWithAggregatesInput[]
    NOT?: ContributionScalarWhereWithAggregatesInput | ContributionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contribution"> | string
    user_id?: StringWithAggregatesFilter<"Contribution"> | string
    repo_id?: StringWithAggregatesFilter<"Contribution"> | string
    type?: StringWithAggregatesFilter<"Contribution"> | string
    github_event_id?: StringNullableWithAggregatesFilter<"Contribution"> | string | null
    event_url?: StringNullableWithAggregatesFilter<"Contribution"> | string | null
    event_date?: DateTimeNullableWithAggregatesFilter<"Contribution"> | Date | string | null
    details?: JsonNullableWithAggregatesFilter<"Contribution">
    created_at?: DateTimeWithAggregatesFilter<"Contribution"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Contribution"> | Date | string
  }

  export type UserRepoStatWhereInput = {
    AND?: UserRepoStatWhereInput | UserRepoStatWhereInput[]
    OR?: UserRepoStatWhereInput[]
    NOT?: UserRepoStatWhereInput | UserRepoStatWhereInput[]
    id?: StringFilter<"UserRepoStat"> | string
    user_id?: StringFilter<"UserRepoStat"> | string
    repo_id?: StringFilter<"UserRepoStat"> | string
    total_commits?: IntFilter<"UserRepoStat"> | number
    total_prs?: IntFilter<"UserRepoStat"> | number
    total_issues?: IntFilter<"UserRepoStat"> | number
    last_updated_at?: DateTimeFilter<"UserRepoStat"> | Date | string
    repo?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserRepoStatOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_id?: SortOrder
    total_commits?: SortOrder
    total_prs?: SortOrder
    total_issues?: SortOrder
    last_updated_at?: SortOrder
    repo?: RepositoryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserRepoStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_repo_id?: UserRepoStatUser_idRepo_idCompoundUniqueInput
    AND?: UserRepoStatWhereInput | UserRepoStatWhereInput[]
    OR?: UserRepoStatWhereInput[]
    NOT?: UserRepoStatWhereInput | UserRepoStatWhereInput[]
    user_id?: StringFilter<"UserRepoStat"> | string
    repo_id?: StringFilter<"UserRepoStat"> | string
    total_commits?: IntFilter<"UserRepoStat"> | number
    total_prs?: IntFilter<"UserRepoStat"> | number
    total_issues?: IntFilter<"UserRepoStat"> | number
    last_updated_at?: DateTimeFilter<"UserRepoStat"> | Date | string
    repo?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id_repo_id">

  export type UserRepoStatOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_id?: SortOrder
    total_commits?: SortOrder
    total_prs?: SortOrder
    total_issues?: SortOrder
    last_updated_at?: SortOrder
    _count?: UserRepoStatCountOrderByAggregateInput
    _avg?: UserRepoStatAvgOrderByAggregateInput
    _max?: UserRepoStatMaxOrderByAggregateInput
    _min?: UserRepoStatMinOrderByAggregateInput
    _sum?: UserRepoStatSumOrderByAggregateInput
  }

  export type UserRepoStatScalarWhereWithAggregatesInput = {
    AND?: UserRepoStatScalarWhereWithAggregatesInput | UserRepoStatScalarWhereWithAggregatesInput[]
    OR?: UserRepoStatScalarWhereWithAggregatesInput[]
    NOT?: UserRepoStatScalarWhereWithAggregatesInput | UserRepoStatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRepoStat"> | string
    user_id?: StringWithAggregatesFilter<"UserRepoStat"> | string
    repo_id?: StringWithAggregatesFilter<"UserRepoStat"> | string
    total_commits?: IntWithAggregatesFilter<"UserRepoStat"> | number
    total_prs?: IntWithAggregatesFilter<"UserRepoStat"> | number
    total_issues?: IntWithAggregatesFilter<"UserRepoStat"> | number
    last_updated_at?: DateTimeWithAggregatesFilter<"UserRepoStat"> | Date | string
  }

  export type RecommendedRepoWhereInput = {
    AND?: RecommendedRepoWhereInput | RecommendedRepoWhereInput[]
    OR?: RecommendedRepoWhereInput[]
    NOT?: RecommendedRepoWhereInput | RecommendedRepoWhereInput[]
    id?: StringFilter<"RecommendedRepo"> | string
    user_id?: StringFilter<"RecommendedRepo"> | string
    repo_id?: StringFilter<"RecommendedRepo"> | string
    score?: FloatNullableFilter<"RecommendedRepo"> | number | null
    recommended_at?: DateTimeFilter<"RecommendedRepo"> | Date | string
    tags_matched?: JsonNullableFilter<"RecommendedRepo">
    repo?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RecommendedRepoOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_id?: SortOrder
    score?: SortOrderInput | SortOrder
    recommended_at?: SortOrder
    tags_matched?: SortOrderInput | SortOrder
    repo?: RepositoryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RecommendedRepoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecommendedRepoWhereInput | RecommendedRepoWhereInput[]
    OR?: RecommendedRepoWhereInput[]
    NOT?: RecommendedRepoWhereInput | RecommendedRepoWhereInput[]
    user_id?: StringFilter<"RecommendedRepo"> | string
    repo_id?: StringFilter<"RecommendedRepo"> | string
    score?: FloatNullableFilter<"RecommendedRepo"> | number | null
    recommended_at?: DateTimeFilter<"RecommendedRepo"> | Date | string
    tags_matched?: JsonNullableFilter<"RecommendedRepo">
    repo?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RecommendedRepoOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_id?: SortOrder
    score?: SortOrderInput | SortOrder
    recommended_at?: SortOrder
    tags_matched?: SortOrderInput | SortOrder
    _count?: RecommendedRepoCountOrderByAggregateInput
    _avg?: RecommendedRepoAvgOrderByAggregateInput
    _max?: RecommendedRepoMaxOrderByAggregateInput
    _min?: RecommendedRepoMinOrderByAggregateInput
    _sum?: RecommendedRepoSumOrderByAggregateInput
  }

  export type RecommendedRepoScalarWhereWithAggregatesInput = {
    AND?: RecommendedRepoScalarWhereWithAggregatesInput | RecommendedRepoScalarWhereWithAggregatesInput[]
    OR?: RecommendedRepoScalarWhereWithAggregatesInput[]
    NOT?: RecommendedRepoScalarWhereWithAggregatesInput | RecommendedRepoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecommendedRepo"> | string
    user_id?: StringWithAggregatesFilter<"RecommendedRepo"> | string
    repo_id?: StringWithAggregatesFilter<"RecommendedRepo"> | string
    score?: FloatNullableWithAggregatesFilter<"RecommendedRepo"> | number | null
    recommended_at?: DateTimeWithAggregatesFilter<"RecommendedRepo"> | Date | string
    tags_matched?: JsonNullableWithAggregatesFilter<"RecommendedRepo">
  }

  export type RepoFetchHistoryWhereInput = {
    AND?: RepoFetchHistoryWhereInput | RepoFetchHistoryWhereInput[]
    OR?: RepoFetchHistoryWhereInput[]
    NOT?: RepoFetchHistoryWhereInput | RepoFetchHistoryWhereInput[]
    id?: StringFilter<"RepoFetchHistory"> | string
    repo_id?: StringFilter<"RepoFetchHistory"> | string
    fetched_at?: DateTimeFilter<"RepoFetchHistory"> | Date | string
    status?: StringFilter<"RepoFetchHistory"> | string
    raw_metadata?: JsonNullableFilter<"RepoFetchHistory">
    repo?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
  }

  export type RepoFetchHistoryOrderByWithRelationInput = {
    id?: SortOrder
    repo_id?: SortOrder
    fetched_at?: SortOrder
    status?: SortOrder
    raw_metadata?: SortOrderInput | SortOrder
    repo?: RepositoryOrderByWithRelationInput
  }

  export type RepoFetchHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RepoFetchHistoryWhereInput | RepoFetchHistoryWhereInput[]
    OR?: RepoFetchHistoryWhereInput[]
    NOT?: RepoFetchHistoryWhereInput | RepoFetchHistoryWhereInput[]
    repo_id?: StringFilter<"RepoFetchHistory"> | string
    fetched_at?: DateTimeFilter<"RepoFetchHistory"> | Date | string
    status?: StringFilter<"RepoFetchHistory"> | string
    raw_metadata?: JsonNullableFilter<"RepoFetchHistory">
    repo?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
  }, "id">

  export type RepoFetchHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    repo_id?: SortOrder
    fetched_at?: SortOrder
    status?: SortOrder
    raw_metadata?: SortOrderInput | SortOrder
    _count?: RepoFetchHistoryCountOrderByAggregateInput
    _max?: RepoFetchHistoryMaxOrderByAggregateInput
    _min?: RepoFetchHistoryMinOrderByAggregateInput
  }

  export type RepoFetchHistoryScalarWhereWithAggregatesInput = {
    AND?: RepoFetchHistoryScalarWhereWithAggregatesInput | RepoFetchHistoryScalarWhereWithAggregatesInput[]
    OR?: RepoFetchHistoryScalarWhereWithAggregatesInput[]
    NOT?: RepoFetchHistoryScalarWhereWithAggregatesInput | RepoFetchHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RepoFetchHistory"> | string
    repo_id?: StringWithAggregatesFilter<"RepoFetchHistory"> | string
    fetched_at?: DateTimeWithAggregatesFilter<"RepoFetchHistory"> | Date | string
    status?: StringWithAggregatesFilter<"RepoFetchHistory"> | string
    raw_metadata?: JsonNullableWithAggregatesFilter<"RepoFetchHistory">
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    avatar_url?: string
    created_at?: Date | string
    display_name?: string | null
    github_id: string
    last_login_at?: Date | string | null
    profile_url?: string
    username?: string
    contributions?: ContributionCreateNestedManyWithoutUserInput
    recommendedRepos?: RecommendedRepoCreateNestedManyWithoutUserInput
    userRepoStats?: UserRepoStatCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    avatar_url?: string
    created_at?: Date | string
    display_name?: string | null
    github_id: string
    last_login_at?: Date | string | null
    profile_url?: string
    username?: string
    contributions?: ContributionUncheckedCreateNestedManyWithoutUserInput
    recommendedRepos?: RecommendedRepoUncheckedCreateNestedManyWithoutUserInput
    userRepoStats?: UserRepoStatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    github_id?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_url?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contributions?: ContributionUpdateManyWithoutUserNestedInput
    recommendedRepos?: RecommendedRepoUpdateManyWithoutUserNestedInput
    userRepoStats?: UserRepoStatUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    github_id?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_url?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contributions?: ContributionUncheckedUpdateManyWithoutUserNestedInput
    recommendedRepos?: RecommendedRepoUncheckedUpdateManyWithoutUserNestedInput
    userRepoStats?: UserRepoStatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    avatar_url?: string
    created_at?: Date | string
    display_name?: string | null
    github_id: string
    last_login_at?: Date | string | null
    profile_url?: string
    username?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    github_id?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_url?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    github_id?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_url?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type RepositoryCreateInput = {
    id?: string
    github_repo_id: string
    owner: string
    name: string
    full_name: string
    html_url: string
    description?: string | null
    primary_language?: string | null
    stars_count?: number | null
    forks_count?: number | null
    open_issues_count?: number | null
    is_fork?: boolean
    is_private?: boolean
    last_pushed_at?: Date | string | null
    contributions?: ContributionCreateNestedManyWithoutRepoInput
    recommendedRepos?: RecommendedRepoCreateNestedManyWithoutRepoInput
    fetchHistory?: RepoFetchHistoryCreateNestedManyWithoutRepoInput
    userRepoStats?: UserRepoStatCreateNestedManyWithoutRepoInput
  }

  export type RepositoryUncheckedCreateInput = {
    id?: string
    github_repo_id: string
    owner: string
    name: string
    full_name: string
    html_url: string
    description?: string | null
    primary_language?: string | null
    stars_count?: number | null
    forks_count?: number | null
    open_issues_count?: number | null
    is_fork?: boolean
    is_private?: boolean
    last_pushed_at?: Date | string | null
    contributions?: ContributionUncheckedCreateNestedManyWithoutRepoInput
    recommendedRepos?: RecommendedRepoUncheckedCreateNestedManyWithoutRepoInput
    fetchHistory?: RepoFetchHistoryUncheckedCreateNestedManyWithoutRepoInput
    userRepoStats?: UserRepoStatUncheckedCreateNestedManyWithoutRepoInput
  }

  export type RepositoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_repo_id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    html_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primary_language?: NullableStringFieldUpdateOperationsInput | string | null
    stars_count?: NullableIntFieldUpdateOperationsInput | number | null
    forks_count?: NullableIntFieldUpdateOperationsInput | number | null
    open_issues_count?: NullableIntFieldUpdateOperationsInput | number | null
    is_fork?: BoolFieldUpdateOperationsInput | boolean
    is_private?: BoolFieldUpdateOperationsInput | boolean
    last_pushed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contributions?: ContributionUpdateManyWithoutRepoNestedInput
    recommendedRepos?: RecommendedRepoUpdateManyWithoutRepoNestedInput
    fetchHistory?: RepoFetchHistoryUpdateManyWithoutRepoNestedInput
    userRepoStats?: UserRepoStatUpdateManyWithoutRepoNestedInput
  }

  export type RepositoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_repo_id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    html_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primary_language?: NullableStringFieldUpdateOperationsInput | string | null
    stars_count?: NullableIntFieldUpdateOperationsInput | number | null
    forks_count?: NullableIntFieldUpdateOperationsInput | number | null
    open_issues_count?: NullableIntFieldUpdateOperationsInput | number | null
    is_fork?: BoolFieldUpdateOperationsInput | boolean
    is_private?: BoolFieldUpdateOperationsInput | boolean
    last_pushed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contributions?: ContributionUncheckedUpdateManyWithoutRepoNestedInput
    recommendedRepos?: RecommendedRepoUncheckedUpdateManyWithoutRepoNestedInput
    fetchHistory?: RepoFetchHistoryUncheckedUpdateManyWithoutRepoNestedInput
    userRepoStats?: UserRepoStatUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type RepositoryCreateManyInput = {
    id?: string
    github_repo_id: string
    owner: string
    name: string
    full_name: string
    html_url: string
    description?: string | null
    primary_language?: string | null
    stars_count?: number | null
    forks_count?: number | null
    open_issues_count?: number | null
    is_fork?: boolean
    is_private?: boolean
    last_pushed_at?: Date | string | null
  }

  export type RepositoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_repo_id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    html_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primary_language?: NullableStringFieldUpdateOperationsInput | string | null
    stars_count?: NullableIntFieldUpdateOperationsInput | number | null
    forks_count?: NullableIntFieldUpdateOperationsInput | number | null
    open_issues_count?: NullableIntFieldUpdateOperationsInput | number | null
    is_fork?: BoolFieldUpdateOperationsInput | boolean
    is_private?: BoolFieldUpdateOperationsInput | boolean
    last_pushed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RepositoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_repo_id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    html_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primary_language?: NullableStringFieldUpdateOperationsInput | string | null
    stars_count?: NullableIntFieldUpdateOperationsInput | number | null
    forks_count?: NullableIntFieldUpdateOperationsInput | number | null
    open_issues_count?: NullableIntFieldUpdateOperationsInput | number | null
    is_fork?: BoolFieldUpdateOperationsInput | boolean
    is_private?: BoolFieldUpdateOperationsInput | boolean
    last_pushed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContributionCreateInput = {
    id?: string
    type: string
    github_event_id?: string | null
    event_url?: string | null
    event_date?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    repo: RepositoryCreateNestedOneWithoutContributionsInput
    user: UserCreateNestedOneWithoutContributionsInput
  }

  export type ContributionUncheckedCreateInput = {
    id?: string
    user_id: string
    repo_id: string
    type: string
    github_event_id?: string | null
    event_url?: string | null
    event_date?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContributionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    repo?: RepositoryUpdateOneRequiredWithoutContributionsNestedInput
    user?: UserUpdateOneRequiredWithoutContributionsNestedInput
  }

  export type ContributionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    repo_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionCreateManyInput = {
    id?: string
    user_id: string
    repo_id: string
    type: string
    github_event_id?: string | null
    event_url?: string | null
    event_date?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContributionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    repo_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRepoStatCreateInput = {
    id?: string
    total_commits?: number
    total_prs?: number
    total_issues?: number
    last_updated_at?: Date | string
    repo: RepositoryCreateNestedOneWithoutUserRepoStatsInput
    user: UserCreateNestedOneWithoutUserRepoStatsInput
  }

  export type UserRepoStatUncheckedCreateInput = {
    id?: string
    user_id: string
    repo_id: string
    total_commits?: number
    total_prs?: number
    total_issues?: number
    last_updated_at?: Date | string
  }

  export type UserRepoStatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_commits?: IntFieldUpdateOperationsInput | number
    total_prs?: IntFieldUpdateOperationsInput | number
    total_issues?: IntFieldUpdateOperationsInput | number
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    repo?: RepositoryUpdateOneRequiredWithoutUserRepoStatsNestedInput
    user?: UserUpdateOneRequiredWithoutUserRepoStatsNestedInput
  }

  export type UserRepoStatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    repo_id?: StringFieldUpdateOperationsInput | string
    total_commits?: IntFieldUpdateOperationsInput | number
    total_prs?: IntFieldUpdateOperationsInput | number
    total_issues?: IntFieldUpdateOperationsInput | number
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRepoStatCreateManyInput = {
    id?: string
    user_id: string
    repo_id: string
    total_commits?: number
    total_prs?: number
    total_issues?: number
    last_updated_at?: Date | string
  }

  export type UserRepoStatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_commits?: IntFieldUpdateOperationsInput | number
    total_prs?: IntFieldUpdateOperationsInput | number
    total_issues?: IntFieldUpdateOperationsInput | number
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRepoStatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    repo_id?: StringFieldUpdateOperationsInput | string
    total_commits?: IntFieldUpdateOperationsInput | number
    total_prs?: IntFieldUpdateOperationsInput | number
    total_issues?: IntFieldUpdateOperationsInput | number
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendedRepoCreateInput = {
    id?: string
    score?: number | null
    recommended_at?: Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
    repo: RepositoryCreateNestedOneWithoutRecommendedReposInput
    user: UserCreateNestedOneWithoutRecommendedReposInput
  }

  export type RecommendedRepoUncheckedCreateInput = {
    id?: string
    user_id: string
    repo_id: string
    score?: number | null
    recommended_at?: Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RecommendedRepoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
    repo?: RepositoryUpdateOneRequiredWithoutRecommendedReposNestedInput
    user?: UserUpdateOneRequiredWithoutRecommendedReposNestedInput
  }

  export type RecommendedRepoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    repo_id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RecommendedRepoCreateManyInput = {
    id?: string
    user_id: string
    repo_id: string
    score?: number | null
    recommended_at?: Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RecommendedRepoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RecommendedRepoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    repo_id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RepoFetchHistoryCreateInput = {
    id?: string
    fetched_at?: Date | string
    status: string
    raw_metadata?: NullableJsonNullValueInput | InputJsonValue
    repo: RepositoryCreateNestedOneWithoutFetchHistoryInput
  }

  export type RepoFetchHistoryUncheckedCreateInput = {
    id?: string
    repo_id: string
    fetched_at?: Date | string
    status: string
    raw_metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RepoFetchHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fetched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    raw_metadata?: NullableJsonNullValueInput | InputJsonValue
    repo?: RepositoryUpdateOneRequiredWithoutFetchHistoryNestedInput
  }

  export type RepoFetchHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    repo_id?: StringFieldUpdateOperationsInput | string
    fetched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    raw_metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RepoFetchHistoryCreateManyInput = {
    id?: string
    repo_id: string
    fetched_at?: Date | string
    status: string
    raw_metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RepoFetchHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fetched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    raw_metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RepoFetchHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    repo_id?: StringFieldUpdateOperationsInput | string
    fetched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    raw_metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ContributionListRelationFilter = {
    every?: ContributionWhereInput
    some?: ContributionWhereInput
    none?: ContributionWhereInput
  }

  export type RecommendedRepoListRelationFilter = {
    every?: RecommendedRepoWhereInput
    some?: RecommendedRepoWhereInput
    none?: RecommendedRepoWhereInput
  }

  export type UserRepoStatListRelationFilter = {
    every?: UserRepoStatWhereInput
    some?: UserRepoStatWhereInput
    none?: UserRepoStatWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContributionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecommendedRepoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRepoStatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    display_name?: SortOrder
    github_id?: SortOrder
    last_login_at?: SortOrder
    profile_url?: SortOrder
    username?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    display_name?: SortOrder
    github_id?: SortOrder
    last_login_at?: SortOrder
    profile_url?: SortOrder
    username?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    display_name?: SortOrder
    github_id?: SortOrder
    last_login_at?: SortOrder
    profile_url?: SortOrder
    username?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RepoFetchHistoryListRelationFilter = {
    every?: RepoFetchHistoryWhereInput
    some?: RepoFetchHistoryWhereInput
    none?: RepoFetchHistoryWhereInput
  }

  export type RepoFetchHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepositoryCountOrderByAggregateInput = {
    id?: SortOrder
    github_repo_id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    full_name?: SortOrder
    html_url?: SortOrder
    description?: SortOrder
    primary_language?: SortOrder
    stars_count?: SortOrder
    forks_count?: SortOrder
    open_issues_count?: SortOrder
    is_fork?: SortOrder
    is_private?: SortOrder
    last_pushed_at?: SortOrder
  }

  export type RepositoryAvgOrderByAggregateInput = {
    stars_count?: SortOrder
    forks_count?: SortOrder
    open_issues_count?: SortOrder
  }

  export type RepositoryMaxOrderByAggregateInput = {
    id?: SortOrder
    github_repo_id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    full_name?: SortOrder
    html_url?: SortOrder
    description?: SortOrder
    primary_language?: SortOrder
    stars_count?: SortOrder
    forks_count?: SortOrder
    open_issues_count?: SortOrder
    is_fork?: SortOrder
    is_private?: SortOrder
    last_pushed_at?: SortOrder
  }

  export type RepositoryMinOrderByAggregateInput = {
    id?: SortOrder
    github_repo_id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    full_name?: SortOrder
    html_url?: SortOrder
    description?: SortOrder
    primary_language?: SortOrder
    stars_count?: SortOrder
    forks_count?: SortOrder
    open_issues_count?: SortOrder
    is_fork?: SortOrder
    is_private?: SortOrder
    last_pushed_at?: SortOrder
  }

  export type RepositorySumOrderByAggregateInput = {
    stars_count?: SortOrder
    forks_count?: SortOrder
    open_issues_count?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RepositoryScalarRelationFilter = {
    is?: RepositoryWhereInput
    isNot?: RepositoryWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ContributionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_id?: SortOrder
    type?: SortOrder
    github_event_id?: SortOrder
    event_url?: SortOrder
    event_date?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ContributionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_id?: SortOrder
    type?: SortOrder
    github_event_id?: SortOrder
    event_url?: SortOrder
    event_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ContributionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_id?: SortOrder
    type?: SortOrder
    github_event_id?: SortOrder
    event_url?: SortOrder
    event_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserRepoStatUser_idRepo_idCompoundUniqueInput = {
    user_id: string
    repo_id: string
  }

  export type UserRepoStatCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_id?: SortOrder
    total_commits?: SortOrder
    total_prs?: SortOrder
    total_issues?: SortOrder
    last_updated_at?: SortOrder
  }

  export type UserRepoStatAvgOrderByAggregateInput = {
    total_commits?: SortOrder
    total_prs?: SortOrder
    total_issues?: SortOrder
  }

  export type UserRepoStatMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_id?: SortOrder
    total_commits?: SortOrder
    total_prs?: SortOrder
    total_issues?: SortOrder
    last_updated_at?: SortOrder
  }

  export type UserRepoStatMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_id?: SortOrder
    total_commits?: SortOrder
    total_prs?: SortOrder
    total_issues?: SortOrder
    last_updated_at?: SortOrder
  }

  export type UserRepoStatSumOrderByAggregateInput = {
    total_commits?: SortOrder
    total_prs?: SortOrder
    total_issues?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RecommendedRepoCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_id?: SortOrder
    score?: SortOrder
    recommended_at?: SortOrder
    tags_matched?: SortOrder
  }

  export type RecommendedRepoAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type RecommendedRepoMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_id?: SortOrder
    score?: SortOrder
    recommended_at?: SortOrder
  }

  export type RecommendedRepoMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_id?: SortOrder
    score?: SortOrder
    recommended_at?: SortOrder
  }

  export type RecommendedRepoSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type RepoFetchHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    repo_id?: SortOrder
    fetched_at?: SortOrder
    status?: SortOrder
    raw_metadata?: SortOrder
  }

  export type RepoFetchHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    repo_id?: SortOrder
    fetched_at?: SortOrder
    status?: SortOrder
  }

  export type RepoFetchHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    repo_id?: SortOrder
    fetched_at?: SortOrder
    status?: SortOrder
  }

  export type ContributionCreateNestedManyWithoutUserInput = {
    create?: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput> | ContributionCreateWithoutUserInput[] | ContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutUserInput | ContributionCreateOrConnectWithoutUserInput[]
    createMany?: ContributionCreateManyUserInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type RecommendedRepoCreateNestedManyWithoutUserInput = {
    create?: XOR<RecommendedRepoCreateWithoutUserInput, RecommendedRepoUncheckedCreateWithoutUserInput> | RecommendedRepoCreateWithoutUserInput[] | RecommendedRepoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendedRepoCreateOrConnectWithoutUserInput | RecommendedRepoCreateOrConnectWithoutUserInput[]
    createMany?: RecommendedRepoCreateManyUserInputEnvelope
    connect?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
  }

  export type UserRepoStatCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRepoStatCreateWithoutUserInput, UserRepoStatUncheckedCreateWithoutUserInput> | UserRepoStatCreateWithoutUserInput[] | UserRepoStatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRepoStatCreateOrConnectWithoutUserInput | UserRepoStatCreateOrConnectWithoutUserInput[]
    createMany?: UserRepoStatCreateManyUserInputEnvelope
    connect?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
  }

  export type ContributionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput> | ContributionCreateWithoutUserInput[] | ContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutUserInput | ContributionCreateOrConnectWithoutUserInput[]
    createMany?: ContributionCreateManyUserInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type RecommendedRepoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecommendedRepoCreateWithoutUserInput, RecommendedRepoUncheckedCreateWithoutUserInput> | RecommendedRepoCreateWithoutUserInput[] | RecommendedRepoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendedRepoCreateOrConnectWithoutUserInput | RecommendedRepoCreateOrConnectWithoutUserInput[]
    createMany?: RecommendedRepoCreateManyUserInputEnvelope
    connect?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
  }

  export type UserRepoStatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRepoStatCreateWithoutUserInput, UserRepoStatUncheckedCreateWithoutUserInput> | UserRepoStatCreateWithoutUserInput[] | UserRepoStatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRepoStatCreateOrConnectWithoutUserInput | UserRepoStatCreateOrConnectWithoutUserInput[]
    createMany?: UserRepoStatCreateManyUserInputEnvelope
    connect?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ContributionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput> | ContributionCreateWithoutUserInput[] | ContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutUserInput | ContributionCreateOrConnectWithoutUserInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutUserInput | ContributionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContributionCreateManyUserInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutUserInput | ContributionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutUserInput | ContributionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type RecommendedRepoUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecommendedRepoCreateWithoutUserInput, RecommendedRepoUncheckedCreateWithoutUserInput> | RecommendedRepoCreateWithoutUserInput[] | RecommendedRepoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendedRepoCreateOrConnectWithoutUserInput | RecommendedRepoCreateOrConnectWithoutUserInput[]
    upsert?: RecommendedRepoUpsertWithWhereUniqueWithoutUserInput | RecommendedRepoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecommendedRepoCreateManyUserInputEnvelope
    set?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
    disconnect?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
    delete?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
    connect?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
    update?: RecommendedRepoUpdateWithWhereUniqueWithoutUserInput | RecommendedRepoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecommendedRepoUpdateManyWithWhereWithoutUserInput | RecommendedRepoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecommendedRepoScalarWhereInput | RecommendedRepoScalarWhereInput[]
  }

  export type UserRepoStatUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRepoStatCreateWithoutUserInput, UserRepoStatUncheckedCreateWithoutUserInput> | UserRepoStatCreateWithoutUserInput[] | UserRepoStatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRepoStatCreateOrConnectWithoutUserInput | UserRepoStatCreateOrConnectWithoutUserInput[]
    upsert?: UserRepoStatUpsertWithWhereUniqueWithoutUserInput | UserRepoStatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRepoStatCreateManyUserInputEnvelope
    set?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
    disconnect?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
    delete?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
    connect?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
    update?: UserRepoStatUpdateWithWhereUniqueWithoutUserInput | UserRepoStatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRepoStatUpdateManyWithWhereWithoutUserInput | UserRepoStatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRepoStatScalarWhereInput | UserRepoStatScalarWhereInput[]
  }

  export type ContributionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput> | ContributionCreateWithoutUserInput[] | ContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutUserInput | ContributionCreateOrConnectWithoutUserInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutUserInput | ContributionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContributionCreateManyUserInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutUserInput | ContributionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutUserInput | ContributionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type RecommendedRepoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecommendedRepoCreateWithoutUserInput, RecommendedRepoUncheckedCreateWithoutUserInput> | RecommendedRepoCreateWithoutUserInput[] | RecommendedRepoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendedRepoCreateOrConnectWithoutUserInput | RecommendedRepoCreateOrConnectWithoutUserInput[]
    upsert?: RecommendedRepoUpsertWithWhereUniqueWithoutUserInput | RecommendedRepoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecommendedRepoCreateManyUserInputEnvelope
    set?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
    disconnect?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
    delete?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
    connect?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
    update?: RecommendedRepoUpdateWithWhereUniqueWithoutUserInput | RecommendedRepoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecommendedRepoUpdateManyWithWhereWithoutUserInput | RecommendedRepoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecommendedRepoScalarWhereInput | RecommendedRepoScalarWhereInput[]
  }

  export type UserRepoStatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRepoStatCreateWithoutUserInput, UserRepoStatUncheckedCreateWithoutUserInput> | UserRepoStatCreateWithoutUserInput[] | UserRepoStatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRepoStatCreateOrConnectWithoutUserInput | UserRepoStatCreateOrConnectWithoutUserInput[]
    upsert?: UserRepoStatUpsertWithWhereUniqueWithoutUserInput | UserRepoStatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRepoStatCreateManyUserInputEnvelope
    set?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
    disconnect?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
    delete?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
    connect?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
    update?: UserRepoStatUpdateWithWhereUniqueWithoutUserInput | UserRepoStatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRepoStatUpdateManyWithWhereWithoutUserInput | UserRepoStatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRepoStatScalarWhereInput | UserRepoStatScalarWhereInput[]
  }

  export type ContributionCreateNestedManyWithoutRepoInput = {
    create?: XOR<ContributionCreateWithoutRepoInput, ContributionUncheckedCreateWithoutRepoInput> | ContributionCreateWithoutRepoInput[] | ContributionUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutRepoInput | ContributionCreateOrConnectWithoutRepoInput[]
    createMany?: ContributionCreateManyRepoInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type RecommendedRepoCreateNestedManyWithoutRepoInput = {
    create?: XOR<RecommendedRepoCreateWithoutRepoInput, RecommendedRepoUncheckedCreateWithoutRepoInput> | RecommendedRepoCreateWithoutRepoInput[] | RecommendedRepoUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: RecommendedRepoCreateOrConnectWithoutRepoInput | RecommendedRepoCreateOrConnectWithoutRepoInput[]
    createMany?: RecommendedRepoCreateManyRepoInputEnvelope
    connect?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
  }

  export type RepoFetchHistoryCreateNestedManyWithoutRepoInput = {
    create?: XOR<RepoFetchHistoryCreateWithoutRepoInput, RepoFetchHistoryUncheckedCreateWithoutRepoInput> | RepoFetchHistoryCreateWithoutRepoInput[] | RepoFetchHistoryUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: RepoFetchHistoryCreateOrConnectWithoutRepoInput | RepoFetchHistoryCreateOrConnectWithoutRepoInput[]
    createMany?: RepoFetchHistoryCreateManyRepoInputEnvelope
    connect?: RepoFetchHistoryWhereUniqueInput | RepoFetchHistoryWhereUniqueInput[]
  }

  export type UserRepoStatCreateNestedManyWithoutRepoInput = {
    create?: XOR<UserRepoStatCreateWithoutRepoInput, UserRepoStatUncheckedCreateWithoutRepoInput> | UserRepoStatCreateWithoutRepoInput[] | UserRepoStatUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: UserRepoStatCreateOrConnectWithoutRepoInput | UserRepoStatCreateOrConnectWithoutRepoInput[]
    createMany?: UserRepoStatCreateManyRepoInputEnvelope
    connect?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
  }

  export type ContributionUncheckedCreateNestedManyWithoutRepoInput = {
    create?: XOR<ContributionCreateWithoutRepoInput, ContributionUncheckedCreateWithoutRepoInput> | ContributionCreateWithoutRepoInput[] | ContributionUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutRepoInput | ContributionCreateOrConnectWithoutRepoInput[]
    createMany?: ContributionCreateManyRepoInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type RecommendedRepoUncheckedCreateNestedManyWithoutRepoInput = {
    create?: XOR<RecommendedRepoCreateWithoutRepoInput, RecommendedRepoUncheckedCreateWithoutRepoInput> | RecommendedRepoCreateWithoutRepoInput[] | RecommendedRepoUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: RecommendedRepoCreateOrConnectWithoutRepoInput | RecommendedRepoCreateOrConnectWithoutRepoInput[]
    createMany?: RecommendedRepoCreateManyRepoInputEnvelope
    connect?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
  }

  export type RepoFetchHistoryUncheckedCreateNestedManyWithoutRepoInput = {
    create?: XOR<RepoFetchHistoryCreateWithoutRepoInput, RepoFetchHistoryUncheckedCreateWithoutRepoInput> | RepoFetchHistoryCreateWithoutRepoInput[] | RepoFetchHistoryUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: RepoFetchHistoryCreateOrConnectWithoutRepoInput | RepoFetchHistoryCreateOrConnectWithoutRepoInput[]
    createMany?: RepoFetchHistoryCreateManyRepoInputEnvelope
    connect?: RepoFetchHistoryWhereUniqueInput | RepoFetchHistoryWhereUniqueInput[]
  }

  export type UserRepoStatUncheckedCreateNestedManyWithoutRepoInput = {
    create?: XOR<UserRepoStatCreateWithoutRepoInput, UserRepoStatUncheckedCreateWithoutRepoInput> | UserRepoStatCreateWithoutRepoInput[] | UserRepoStatUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: UserRepoStatCreateOrConnectWithoutRepoInput | UserRepoStatCreateOrConnectWithoutRepoInput[]
    createMany?: UserRepoStatCreateManyRepoInputEnvelope
    connect?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ContributionUpdateManyWithoutRepoNestedInput = {
    create?: XOR<ContributionCreateWithoutRepoInput, ContributionUncheckedCreateWithoutRepoInput> | ContributionCreateWithoutRepoInput[] | ContributionUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutRepoInput | ContributionCreateOrConnectWithoutRepoInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutRepoInput | ContributionUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: ContributionCreateManyRepoInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutRepoInput | ContributionUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutRepoInput | ContributionUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type RecommendedRepoUpdateManyWithoutRepoNestedInput = {
    create?: XOR<RecommendedRepoCreateWithoutRepoInput, RecommendedRepoUncheckedCreateWithoutRepoInput> | RecommendedRepoCreateWithoutRepoInput[] | RecommendedRepoUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: RecommendedRepoCreateOrConnectWithoutRepoInput | RecommendedRepoCreateOrConnectWithoutRepoInput[]
    upsert?: RecommendedRepoUpsertWithWhereUniqueWithoutRepoInput | RecommendedRepoUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: RecommendedRepoCreateManyRepoInputEnvelope
    set?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
    disconnect?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
    delete?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
    connect?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
    update?: RecommendedRepoUpdateWithWhereUniqueWithoutRepoInput | RecommendedRepoUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: RecommendedRepoUpdateManyWithWhereWithoutRepoInput | RecommendedRepoUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: RecommendedRepoScalarWhereInput | RecommendedRepoScalarWhereInput[]
  }

  export type RepoFetchHistoryUpdateManyWithoutRepoNestedInput = {
    create?: XOR<RepoFetchHistoryCreateWithoutRepoInput, RepoFetchHistoryUncheckedCreateWithoutRepoInput> | RepoFetchHistoryCreateWithoutRepoInput[] | RepoFetchHistoryUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: RepoFetchHistoryCreateOrConnectWithoutRepoInput | RepoFetchHistoryCreateOrConnectWithoutRepoInput[]
    upsert?: RepoFetchHistoryUpsertWithWhereUniqueWithoutRepoInput | RepoFetchHistoryUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: RepoFetchHistoryCreateManyRepoInputEnvelope
    set?: RepoFetchHistoryWhereUniqueInput | RepoFetchHistoryWhereUniqueInput[]
    disconnect?: RepoFetchHistoryWhereUniqueInput | RepoFetchHistoryWhereUniqueInput[]
    delete?: RepoFetchHistoryWhereUniqueInput | RepoFetchHistoryWhereUniqueInput[]
    connect?: RepoFetchHistoryWhereUniqueInput | RepoFetchHistoryWhereUniqueInput[]
    update?: RepoFetchHistoryUpdateWithWhereUniqueWithoutRepoInput | RepoFetchHistoryUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: RepoFetchHistoryUpdateManyWithWhereWithoutRepoInput | RepoFetchHistoryUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: RepoFetchHistoryScalarWhereInput | RepoFetchHistoryScalarWhereInput[]
  }

  export type UserRepoStatUpdateManyWithoutRepoNestedInput = {
    create?: XOR<UserRepoStatCreateWithoutRepoInput, UserRepoStatUncheckedCreateWithoutRepoInput> | UserRepoStatCreateWithoutRepoInput[] | UserRepoStatUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: UserRepoStatCreateOrConnectWithoutRepoInput | UserRepoStatCreateOrConnectWithoutRepoInput[]
    upsert?: UserRepoStatUpsertWithWhereUniqueWithoutRepoInput | UserRepoStatUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: UserRepoStatCreateManyRepoInputEnvelope
    set?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
    disconnect?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
    delete?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
    connect?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
    update?: UserRepoStatUpdateWithWhereUniqueWithoutRepoInput | UserRepoStatUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: UserRepoStatUpdateManyWithWhereWithoutRepoInput | UserRepoStatUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: UserRepoStatScalarWhereInput | UserRepoStatScalarWhereInput[]
  }

  export type ContributionUncheckedUpdateManyWithoutRepoNestedInput = {
    create?: XOR<ContributionCreateWithoutRepoInput, ContributionUncheckedCreateWithoutRepoInput> | ContributionCreateWithoutRepoInput[] | ContributionUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutRepoInput | ContributionCreateOrConnectWithoutRepoInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutRepoInput | ContributionUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: ContributionCreateManyRepoInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutRepoInput | ContributionUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutRepoInput | ContributionUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type RecommendedRepoUncheckedUpdateManyWithoutRepoNestedInput = {
    create?: XOR<RecommendedRepoCreateWithoutRepoInput, RecommendedRepoUncheckedCreateWithoutRepoInput> | RecommendedRepoCreateWithoutRepoInput[] | RecommendedRepoUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: RecommendedRepoCreateOrConnectWithoutRepoInput | RecommendedRepoCreateOrConnectWithoutRepoInput[]
    upsert?: RecommendedRepoUpsertWithWhereUniqueWithoutRepoInput | RecommendedRepoUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: RecommendedRepoCreateManyRepoInputEnvelope
    set?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
    disconnect?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
    delete?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
    connect?: RecommendedRepoWhereUniqueInput | RecommendedRepoWhereUniqueInput[]
    update?: RecommendedRepoUpdateWithWhereUniqueWithoutRepoInput | RecommendedRepoUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: RecommendedRepoUpdateManyWithWhereWithoutRepoInput | RecommendedRepoUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: RecommendedRepoScalarWhereInput | RecommendedRepoScalarWhereInput[]
  }

  export type RepoFetchHistoryUncheckedUpdateManyWithoutRepoNestedInput = {
    create?: XOR<RepoFetchHistoryCreateWithoutRepoInput, RepoFetchHistoryUncheckedCreateWithoutRepoInput> | RepoFetchHistoryCreateWithoutRepoInput[] | RepoFetchHistoryUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: RepoFetchHistoryCreateOrConnectWithoutRepoInput | RepoFetchHistoryCreateOrConnectWithoutRepoInput[]
    upsert?: RepoFetchHistoryUpsertWithWhereUniqueWithoutRepoInput | RepoFetchHistoryUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: RepoFetchHistoryCreateManyRepoInputEnvelope
    set?: RepoFetchHistoryWhereUniqueInput | RepoFetchHistoryWhereUniqueInput[]
    disconnect?: RepoFetchHistoryWhereUniqueInput | RepoFetchHistoryWhereUniqueInput[]
    delete?: RepoFetchHistoryWhereUniqueInput | RepoFetchHistoryWhereUniqueInput[]
    connect?: RepoFetchHistoryWhereUniqueInput | RepoFetchHistoryWhereUniqueInput[]
    update?: RepoFetchHistoryUpdateWithWhereUniqueWithoutRepoInput | RepoFetchHistoryUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: RepoFetchHistoryUpdateManyWithWhereWithoutRepoInput | RepoFetchHistoryUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: RepoFetchHistoryScalarWhereInput | RepoFetchHistoryScalarWhereInput[]
  }

  export type UserRepoStatUncheckedUpdateManyWithoutRepoNestedInput = {
    create?: XOR<UserRepoStatCreateWithoutRepoInput, UserRepoStatUncheckedCreateWithoutRepoInput> | UserRepoStatCreateWithoutRepoInput[] | UserRepoStatUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: UserRepoStatCreateOrConnectWithoutRepoInput | UserRepoStatCreateOrConnectWithoutRepoInput[]
    upsert?: UserRepoStatUpsertWithWhereUniqueWithoutRepoInput | UserRepoStatUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: UserRepoStatCreateManyRepoInputEnvelope
    set?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
    disconnect?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
    delete?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
    connect?: UserRepoStatWhereUniqueInput | UserRepoStatWhereUniqueInput[]
    update?: UserRepoStatUpdateWithWhereUniqueWithoutRepoInput | UserRepoStatUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: UserRepoStatUpdateManyWithWhereWithoutRepoInput | UserRepoStatUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: UserRepoStatScalarWhereInput | UserRepoStatScalarWhereInput[]
  }

  export type RepositoryCreateNestedOneWithoutContributionsInput = {
    create?: XOR<RepositoryCreateWithoutContributionsInput, RepositoryUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutContributionsInput
    connect?: RepositoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutContributionsInput = {
    create?: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContributionsInput
    connect?: UserWhereUniqueInput
  }

  export type RepositoryUpdateOneRequiredWithoutContributionsNestedInput = {
    create?: XOR<RepositoryCreateWithoutContributionsInput, RepositoryUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutContributionsInput
    upsert?: RepositoryUpsertWithoutContributionsInput
    connect?: RepositoryWhereUniqueInput
    update?: XOR<XOR<RepositoryUpdateToOneWithWhereWithoutContributionsInput, RepositoryUpdateWithoutContributionsInput>, RepositoryUncheckedUpdateWithoutContributionsInput>
  }

  export type UserUpdateOneRequiredWithoutContributionsNestedInput = {
    create?: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContributionsInput
    upsert?: UserUpsertWithoutContributionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContributionsInput, UserUpdateWithoutContributionsInput>, UserUncheckedUpdateWithoutContributionsInput>
  }

  export type RepositoryCreateNestedOneWithoutUserRepoStatsInput = {
    create?: XOR<RepositoryCreateWithoutUserRepoStatsInput, RepositoryUncheckedCreateWithoutUserRepoStatsInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutUserRepoStatsInput
    connect?: RepositoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserRepoStatsInput = {
    create?: XOR<UserCreateWithoutUserRepoStatsInput, UserUncheckedCreateWithoutUserRepoStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRepoStatsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RepositoryUpdateOneRequiredWithoutUserRepoStatsNestedInput = {
    create?: XOR<RepositoryCreateWithoutUserRepoStatsInput, RepositoryUncheckedCreateWithoutUserRepoStatsInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutUserRepoStatsInput
    upsert?: RepositoryUpsertWithoutUserRepoStatsInput
    connect?: RepositoryWhereUniqueInput
    update?: XOR<XOR<RepositoryUpdateToOneWithWhereWithoutUserRepoStatsInput, RepositoryUpdateWithoutUserRepoStatsInput>, RepositoryUncheckedUpdateWithoutUserRepoStatsInput>
  }

  export type UserUpdateOneRequiredWithoutUserRepoStatsNestedInput = {
    create?: XOR<UserCreateWithoutUserRepoStatsInput, UserUncheckedCreateWithoutUserRepoStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRepoStatsInput
    upsert?: UserUpsertWithoutUserRepoStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRepoStatsInput, UserUpdateWithoutUserRepoStatsInput>, UserUncheckedUpdateWithoutUserRepoStatsInput>
  }

  export type RepositoryCreateNestedOneWithoutRecommendedReposInput = {
    create?: XOR<RepositoryCreateWithoutRecommendedReposInput, RepositoryUncheckedCreateWithoutRecommendedReposInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutRecommendedReposInput
    connect?: RepositoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRecommendedReposInput = {
    create?: XOR<UserCreateWithoutRecommendedReposInput, UserUncheckedCreateWithoutRecommendedReposInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecommendedReposInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RepositoryUpdateOneRequiredWithoutRecommendedReposNestedInput = {
    create?: XOR<RepositoryCreateWithoutRecommendedReposInput, RepositoryUncheckedCreateWithoutRecommendedReposInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutRecommendedReposInput
    upsert?: RepositoryUpsertWithoutRecommendedReposInput
    connect?: RepositoryWhereUniqueInput
    update?: XOR<XOR<RepositoryUpdateToOneWithWhereWithoutRecommendedReposInput, RepositoryUpdateWithoutRecommendedReposInput>, RepositoryUncheckedUpdateWithoutRecommendedReposInput>
  }

  export type UserUpdateOneRequiredWithoutRecommendedReposNestedInput = {
    create?: XOR<UserCreateWithoutRecommendedReposInput, UserUncheckedCreateWithoutRecommendedReposInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecommendedReposInput
    upsert?: UserUpsertWithoutRecommendedReposInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecommendedReposInput, UserUpdateWithoutRecommendedReposInput>, UserUncheckedUpdateWithoutRecommendedReposInput>
  }

  export type RepositoryCreateNestedOneWithoutFetchHistoryInput = {
    create?: XOR<RepositoryCreateWithoutFetchHistoryInput, RepositoryUncheckedCreateWithoutFetchHistoryInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutFetchHistoryInput
    connect?: RepositoryWhereUniqueInput
  }

  export type RepositoryUpdateOneRequiredWithoutFetchHistoryNestedInput = {
    create?: XOR<RepositoryCreateWithoutFetchHistoryInput, RepositoryUncheckedCreateWithoutFetchHistoryInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutFetchHistoryInput
    upsert?: RepositoryUpsertWithoutFetchHistoryInput
    connect?: RepositoryWhereUniqueInput
    update?: XOR<XOR<RepositoryUpdateToOneWithWhereWithoutFetchHistoryInput, RepositoryUpdateWithoutFetchHistoryInput>, RepositoryUncheckedUpdateWithoutFetchHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ContributionCreateWithoutUserInput = {
    id?: string
    type: string
    github_event_id?: string | null
    event_url?: string | null
    event_date?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    repo: RepositoryCreateNestedOneWithoutContributionsInput
  }

  export type ContributionUncheckedCreateWithoutUserInput = {
    id?: string
    repo_id: string
    type: string
    github_event_id?: string | null
    event_url?: string | null
    event_date?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContributionCreateOrConnectWithoutUserInput = {
    where: ContributionWhereUniqueInput
    create: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput>
  }

  export type ContributionCreateManyUserInputEnvelope = {
    data: ContributionCreateManyUserInput | ContributionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecommendedRepoCreateWithoutUserInput = {
    id?: string
    score?: number | null
    recommended_at?: Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
    repo: RepositoryCreateNestedOneWithoutRecommendedReposInput
  }

  export type RecommendedRepoUncheckedCreateWithoutUserInput = {
    id?: string
    repo_id: string
    score?: number | null
    recommended_at?: Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RecommendedRepoCreateOrConnectWithoutUserInput = {
    where: RecommendedRepoWhereUniqueInput
    create: XOR<RecommendedRepoCreateWithoutUserInput, RecommendedRepoUncheckedCreateWithoutUserInput>
  }

  export type RecommendedRepoCreateManyUserInputEnvelope = {
    data: RecommendedRepoCreateManyUserInput | RecommendedRepoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRepoStatCreateWithoutUserInput = {
    id?: string
    total_commits?: number
    total_prs?: number
    total_issues?: number
    last_updated_at?: Date | string
    repo: RepositoryCreateNestedOneWithoutUserRepoStatsInput
  }

  export type UserRepoStatUncheckedCreateWithoutUserInput = {
    id?: string
    repo_id: string
    total_commits?: number
    total_prs?: number
    total_issues?: number
    last_updated_at?: Date | string
  }

  export type UserRepoStatCreateOrConnectWithoutUserInput = {
    where: UserRepoStatWhereUniqueInput
    create: XOR<UserRepoStatCreateWithoutUserInput, UserRepoStatUncheckedCreateWithoutUserInput>
  }

  export type UserRepoStatCreateManyUserInputEnvelope = {
    data: UserRepoStatCreateManyUserInput | UserRepoStatCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContributionUpsertWithWhereUniqueWithoutUserInput = {
    where: ContributionWhereUniqueInput
    update: XOR<ContributionUpdateWithoutUserInput, ContributionUncheckedUpdateWithoutUserInput>
    create: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput>
  }

  export type ContributionUpdateWithWhereUniqueWithoutUserInput = {
    where: ContributionWhereUniqueInput
    data: XOR<ContributionUpdateWithoutUserInput, ContributionUncheckedUpdateWithoutUserInput>
  }

  export type ContributionUpdateManyWithWhereWithoutUserInput = {
    where: ContributionScalarWhereInput
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyWithoutUserInput>
  }

  export type ContributionScalarWhereInput = {
    AND?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
    OR?: ContributionScalarWhereInput[]
    NOT?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
    id?: StringFilter<"Contribution"> | string
    user_id?: StringFilter<"Contribution"> | string
    repo_id?: StringFilter<"Contribution"> | string
    type?: StringFilter<"Contribution"> | string
    github_event_id?: StringNullableFilter<"Contribution"> | string | null
    event_url?: StringNullableFilter<"Contribution"> | string | null
    event_date?: DateTimeNullableFilter<"Contribution"> | Date | string | null
    details?: JsonNullableFilter<"Contribution">
    created_at?: DateTimeFilter<"Contribution"> | Date | string
    updated_at?: DateTimeFilter<"Contribution"> | Date | string
  }

  export type RecommendedRepoUpsertWithWhereUniqueWithoutUserInput = {
    where: RecommendedRepoWhereUniqueInput
    update: XOR<RecommendedRepoUpdateWithoutUserInput, RecommendedRepoUncheckedUpdateWithoutUserInput>
    create: XOR<RecommendedRepoCreateWithoutUserInput, RecommendedRepoUncheckedCreateWithoutUserInput>
  }

  export type RecommendedRepoUpdateWithWhereUniqueWithoutUserInput = {
    where: RecommendedRepoWhereUniqueInput
    data: XOR<RecommendedRepoUpdateWithoutUserInput, RecommendedRepoUncheckedUpdateWithoutUserInput>
  }

  export type RecommendedRepoUpdateManyWithWhereWithoutUserInput = {
    where: RecommendedRepoScalarWhereInput
    data: XOR<RecommendedRepoUpdateManyMutationInput, RecommendedRepoUncheckedUpdateManyWithoutUserInput>
  }

  export type RecommendedRepoScalarWhereInput = {
    AND?: RecommendedRepoScalarWhereInput | RecommendedRepoScalarWhereInput[]
    OR?: RecommendedRepoScalarWhereInput[]
    NOT?: RecommendedRepoScalarWhereInput | RecommendedRepoScalarWhereInput[]
    id?: StringFilter<"RecommendedRepo"> | string
    user_id?: StringFilter<"RecommendedRepo"> | string
    repo_id?: StringFilter<"RecommendedRepo"> | string
    score?: FloatNullableFilter<"RecommendedRepo"> | number | null
    recommended_at?: DateTimeFilter<"RecommendedRepo"> | Date | string
    tags_matched?: JsonNullableFilter<"RecommendedRepo">
  }

  export type UserRepoStatUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRepoStatWhereUniqueInput
    update: XOR<UserRepoStatUpdateWithoutUserInput, UserRepoStatUncheckedUpdateWithoutUserInput>
    create: XOR<UserRepoStatCreateWithoutUserInput, UserRepoStatUncheckedCreateWithoutUserInput>
  }

  export type UserRepoStatUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRepoStatWhereUniqueInput
    data: XOR<UserRepoStatUpdateWithoutUserInput, UserRepoStatUncheckedUpdateWithoutUserInput>
  }

  export type UserRepoStatUpdateManyWithWhereWithoutUserInput = {
    where: UserRepoStatScalarWhereInput
    data: XOR<UserRepoStatUpdateManyMutationInput, UserRepoStatUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRepoStatScalarWhereInput = {
    AND?: UserRepoStatScalarWhereInput | UserRepoStatScalarWhereInput[]
    OR?: UserRepoStatScalarWhereInput[]
    NOT?: UserRepoStatScalarWhereInput | UserRepoStatScalarWhereInput[]
    id?: StringFilter<"UserRepoStat"> | string
    user_id?: StringFilter<"UserRepoStat"> | string
    repo_id?: StringFilter<"UserRepoStat"> | string
    total_commits?: IntFilter<"UserRepoStat"> | number
    total_prs?: IntFilter<"UserRepoStat"> | number
    total_issues?: IntFilter<"UserRepoStat"> | number
    last_updated_at?: DateTimeFilter<"UserRepoStat"> | Date | string
  }

  export type ContributionCreateWithoutRepoInput = {
    id?: string
    type: string
    github_event_id?: string | null
    event_url?: string | null
    event_date?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutContributionsInput
  }

  export type ContributionUncheckedCreateWithoutRepoInput = {
    id?: string
    user_id: string
    type: string
    github_event_id?: string | null
    event_url?: string | null
    event_date?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContributionCreateOrConnectWithoutRepoInput = {
    where: ContributionWhereUniqueInput
    create: XOR<ContributionCreateWithoutRepoInput, ContributionUncheckedCreateWithoutRepoInput>
  }

  export type ContributionCreateManyRepoInputEnvelope = {
    data: ContributionCreateManyRepoInput | ContributionCreateManyRepoInput[]
    skipDuplicates?: boolean
  }

  export type RecommendedRepoCreateWithoutRepoInput = {
    id?: string
    score?: number | null
    recommended_at?: Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutRecommendedReposInput
  }

  export type RecommendedRepoUncheckedCreateWithoutRepoInput = {
    id?: string
    user_id: string
    score?: number | null
    recommended_at?: Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RecommendedRepoCreateOrConnectWithoutRepoInput = {
    where: RecommendedRepoWhereUniqueInput
    create: XOR<RecommendedRepoCreateWithoutRepoInput, RecommendedRepoUncheckedCreateWithoutRepoInput>
  }

  export type RecommendedRepoCreateManyRepoInputEnvelope = {
    data: RecommendedRepoCreateManyRepoInput | RecommendedRepoCreateManyRepoInput[]
    skipDuplicates?: boolean
  }

  export type RepoFetchHistoryCreateWithoutRepoInput = {
    id?: string
    fetched_at?: Date | string
    status: string
    raw_metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RepoFetchHistoryUncheckedCreateWithoutRepoInput = {
    id?: string
    fetched_at?: Date | string
    status: string
    raw_metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RepoFetchHistoryCreateOrConnectWithoutRepoInput = {
    where: RepoFetchHistoryWhereUniqueInput
    create: XOR<RepoFetchHistoryCreateWithoutRepoInput, RepoFetchHistoryUncheckedCreateWithoutRepoInput>
  }

  export type RepoFetchHistoryCreateManyRepoInputEnvelope = {
    data: RepoFetchHistoryCreateManyRepoInput | RepoFetchHistoryCreateManyRepoInput[]
    skipDuplicates?: boolean
  }

  export type UserRepoStatCreateWithoutRepoInput = {
    id?: string
    total_commits?: number
    total_prs?: number
    total_issues?: number
    last_updated_at?: Date | string
    user: UserCreateNestedOneWithoutUserRepoStatsInput
  }

  export type UserRepoStatUncheckedCreateWithoutRepoInput = {
    id?: string
    user_id: string
    total_commits?: number
    total_prs?: number
    total_issues?: number
    last_updated_at?: Date | string
  }

  export type UserRepoStatCreateOrConnectWithoutRepoInput = {
    where: UserRepoStatWhereUniqueInput
    create: XOR<UserRepoStatCreateWithoutRepoInput, UserRepoStatUncheckedCreateWithoutRepoInput>
  }

  export type UserRepoStatCreateManyRepoInputEnvelope = {
    data: UserRepoStatCreateManyRepoInput | UserRepoStatCreateManyRepoInput[]
    skipDuplicates?: boolean
  }

  export type ContributionUpsertWithWhereUniqueWithoutRepoInput = {
    where: ContributionWhereUniqueInput
    update: XOR<ContributionUpdateWithoutRepoInput, ContributionUncheckedUpdateWithoutRepoInput>
    create: XOR<ContributionCreateWithoutRepoInput, ContributionUncheckedCreateWithoutRepoInput>
  }

  export type ContributionUpdateWithWhereUniqueWithoutRepoInput = {
    where: ContributionWhereUniqueInput
    data: XOR<ContributionUpdateWithoutRepoInput, ContributionUncheckedUpdateWithoutRepoInput>
  }

  export type ContributionUpdateManyWithWhereWithoutRepoInput = {
    where: ContributionScalarWhereInput
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyWithoutRepoInput>
  }

  export type RecommendedRepoUpsertWithWhereUniqueWithoutRepoInput = {
    where: RecommendedRepoWhereUniqueInput
    update: XOR<RecommendedRepoUpdateWithoutRepoInput, RecommendedRepoUncheckedUpdateWithoutRepoInput>
    create: XOR<RecommendedRepoCreateWithoutRepoInput, RecommendedRepoUncheckedCreateWithoutRepoInput>
  }

  export type RecommendedRepoUpdateWithWhereUniqueWithoutRepoInput = {
    where: RecommendedRepoWhereUniqueInput
    data: XOR<RecommendedRepoUpdateWithoutRepoInput, RecommendedRepoUncheckedUpdateWithoutRepoInput>
  }

  export type RecommendedRepoUpdateManyWithWhereWithoutRepoInput = {
    where: RecommendedRepoScalarWhereInput
    data: XOR<RecommendedRepoUpdateManyMutationInput, RecommendedRepoUncheckedUpdateManyWithoutRepoInput>
  }

  export type RepoFetchHistoryUpsertWithWhereUniqueWithoutRepoInput = {
    where: RepoFetchHistoryWhereUniqueInput
    update: XOR<RepoFetchHistoryUpdateWithoutRepoInput, RepoFetchHistoryUncheckedUpdateWithoutRepoInput>
    create: XOR<RepoFetchHistoryCreateWithoutRepoInput, RepoFetchHistoryUncheckedCreateWithoutRepoInput>
  }

  export type RepoFetchHistoryUpdateWithWhereUniqueWithoutRepoInput = {
    where: RepoFetchHistoryWhereUniqueInput
    data: XOR<RepoFetchHistoryUpdateWithoutRepoInput, RepoFetchHistoryUncheckedUpdateWithoutRepoInput>
  }

  export type RepoFetchHistoryUpdateManyWithWhereWithoutRepoInput = {
    where: RepoFetchHistoryScalarWhereInput
    data: XOR<RepoFetchHistoryUpdateManyMutationInput, RepoFetchHistoryUncheckedUpdateManyWithoutRepoInput>
  }

  export type RepoFetchHistoryScalarWhereInput = {
    AND?: RepoFetchHistoryScalarWhereInput | RepoFetchHistoryScalarWhereInput[]
    OR?: RepoFetchHistoryScalarWhereInput[]
    NOT?: RepoFetchHistoryScalarWhereInput | RepoFetchHistoryScalarWhereInput[]
    id?: StringFilter<"RepoFetchHistory"> | string
    repo_id?: StringFilter<"RepoFetchHistory"> | string
    fetched_at?: DateTimeFilter<"RepoFetchHistory"> | Date | string
    status?: StringFilter<"RepoFetchHistory"> | string
    raw_metadata?: JsonNullableFilter<"RepoFetchHistory">
  }

  export type UserRepoStatUpsertWithWhereUniqueWithoutRepoInput = {
    where: UserRepoStatWhereUniqueInput
    update: XOR<UserRepoStatUpdateWithoutRepoInput, UserRepoStatUncheckedUpdateWithoutRepoInput>
    create: XOR<UserRepoStatCreateWithoutRepoInput, UserRepoStatUncheckedCreateWithoutRepoInput>
  }

  export type UserRepoStatUpdateWithWhereUniqueWithoutRepoInput = {
    where: UserRepoStatWhereUniqueInput
    data: XOR<UserRepoStatUpdateWithoutRepoInput, UserRepoStatUncheckedUpdateWithoutRepoInput>
  }

  export type UserRepoStatUpdateManyWithWhereWithoutRepoInput = {
    where: UserRepoStatScalarWhereInput
    data: XOR<UserRepoStatUpdateManyMutationInput, UserRepoStatUncheckedUpdateManyWithoutRepoInput>
  }

  export type RepositoryCreateWithoutContributionsInput = {
    id?: string
    github_repo_id: string
    owner: string
    name: string
    full_name: string
    html_url: string
    description?: string | null
    primary_language?: string | null
    stars_count?: number | null
    forks_count?: number | null
    open_issues_count?: number | null
    is_fork?: boolean
    is_private?: boolean
    last_pushed_at?: Date | string | null
    recommendedRepos?: RecommendedRepoCreateNestedManyWithoutRepoInput
    fetchHistory?: RepoFetchHistoryCreateNestedManyWithoutRepoInput
    userRepoStats?: UserRepoStatCreateNestedManyWithoutRepoInput
  }

  export type RepositoryUncheckedCreateWithoutContributionsInput = {
    id?: string
    github_repo_id: string
    owner: string
    name: string
    full_name: string
    html_url: string
    description?: string | null
    primary_language?: string | null
    stars_count?: number | null
    forks_count?: number | null
    open_issues_count?: number | null
    is_fork?: boolean
    is_private?: boolean
    last_pushed_at?: Date | string | null
    recommendedRepos?: RecommendedRepoUncheckedCreateNestedManyWithoutRepoInput
    fetchHistory?: RepoFetchHistoryUncheckedCreateNestedManyWithoutRepoInput
    userRepoStats?: UserRepoStatUncheckedCreateNestedManyWithoutRepoInput
  }

  export type RepositoryCreateOrConnectWithoutContributionsInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutContributionsInput, RepositoryUncheckedCreateWithoutContributionsInput>
  }

  export type UserCreateWithoutContributionsInput = {
    id?: string
    email?: string | null
    avatar_url?: string
    created_at?: Date | string
    display_name?: string | null
    github_id: string
    last_login_at?: Date | string | null
    profile_url?: string
    username?: string
    recommendedRepos?: RecommendedRepoCreateNestedManyWithoutUserInput
    userRepoStats?: UserRepoStatCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContributionsInput = {
    id?: string
    email?: string | null
    avatar_url?: string
    created_at?: Date | string
    display_name?: string | null
    github_id: string
    last_login_at?: Date | string | null
    profile_url?: string
    username?: string
    recommendedRepos?: RecommendedRepoUncheckedCreateNestedManyWithoutUserInput
    userRepoStats?: UserRepoStatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContributionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
  }

  export type RepositoryUpsertWithoutContributionsInput = {
    update: XOR<RepositoryUpdateWithoutContributionsInput, RepositoryUncheckedUpdateWithoutContributionsInput>
    create: XOR<RepositoryCreateWithoutContributionsInput, RepositoryUncheckedCreateWithoutContributionsInput>
    where?: RepositoryWhereInput
  }

  export type RepositoryUpdateToOneWithWhereWithoutContributionsInput = {
    where?: RepositoryWhereInput
    data: XOR<RepositoryUpdateWithoutContributionsInput, RepositoryUncheckedUpdateWithoutContributionsInput>
  }

  export type RepositoryUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_repo_id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    html_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primary_language?: NullableStringFieldUpdateOperationsInput | string | null
    stars_count?: NullableIntFieldUpdateOperationsInput | number | null
    forks_count?: NullableIntFieldUpdateOperationsInput | number | null
    open_issues_count?: NullableIntFieldUpdateOperationsInput | number | null
    is_fork?: BoolFieldUpdateOperationsInput | boolean
    is_private?: BoolFieldUpdateOperationsInput | boolean
    last_pushed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recommendedRepos?: RecommendedRepoUpdateManyWithoutRepoNestedInput
    fetchHistory?: RepoFetchHistoryUpdateManyWithoutRepoNestedInput
    userRepoStats?: UserRepoStatUpdateManyWithoutRepoNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_repo_id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    html_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primary_language?: NullableStringFieldUpdateOperationsInput | string | null
    stars_count?: NullableIntFieldUpdateOperationsInput | number | null
    forks_count?: NullableIntFieldUpdateOperationsInput | number | null
    open_issues_count?: NullableIntFieldUpdateOperationsInput | number | null
    is_fork?: BoolFieldUpdateOperationsInput | boolean
    is_private?: BoolFieldUpdateOperationsInput | boolean
    last_pushed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recommendedRepos?: RecommendedRepoUncheckedUpdateManyWithoutRepoNestedInput
    fetchHistory?: RepoFetchHistoryUncheckedUpdateManyWithoutRepoNestedInput
    userRepoStats?: UserRepoStatUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type UserUpsertWithoutContributionsInput = {
    update: XOR<UserUpdateWithoutContributionsInput, UserUncheckedUpdateWithoutContributionsInput>
    create: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContributionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContributionsInput, UserUncheckedUpdateWithoutContributionsInput>
  }

  export type UserUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    github_id?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_url?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    recommendedRepos?: RecommendedRepoUpdateManyWithoutUserNestedInput
    userRepoStats?: UserRepoStatUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    github_id?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_url?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    recommendedRepos?: RecommendedRepoUncheckedUpdateManyWithoutUserNestedInput
    userRepoStats?: UserRepoStatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RepositoryCreateWithoutUserRepoStatsInput = {
    id?: string
    github_repo_id: string
    owner: string
    name: string
    full_name: string
    html_url: string
    description?: string | null
    primary_language?: string | null
    stars_count?: number | null
    forks_count?: number | null
    open_issues_count?: number | null
    is_fork?: boolean
    is_private?: boolean
    last_pushed_at?: Date | string | null
    contributions?: ContributionCreateNestedManyWithoutRepoInput
    recommendedRepos?: RecommendedRepoCreateNestedManyWithoutRepoInput
    fetchHistory?: RepoFetchHistoryCreateNestedManyWithoutRepoInput
  }

  export type RepositoryUncheckedCreateWithoutUserRepoStatsInput = {
    id?: string
    github_repo_id: string
    owner: string
    name: string
    full_name: string
    html_url: string
    description?: string | null
    primary_language?: string | null
    stars_count?: number | null
    forks_count?: number | null
    open_issues_count?: number | null
    is_fork?: boolean
    is_private?: boolean
    last_pushed_at?: Date | string | null
    contributions?: ContributionUncheckedCreateNestedManyWithoutRepoInput
    recommendedRepos?: RecommendedRepoUncheckedCreateNestedManyWithoutRepoInput
    fetchHistory?: RepoFetchHistoryUncheckedCreateNestedManyWithoutRepoInput
  }

  export type RepositoryCreateOrConnectWithoutUserRepoStatsInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutUserRepoStatsInput, RepositoryUncheckedCreateWithoutUserRepoStatsInput>
  }

  export type UserCreateWithoutUserRepoStatsInput = {
    id?: string
    email?: string | null
    avatar_url?: string
    created_at?: Date | string
    display_name?: string | null
    github_id: string
    last_login_at?: Date | string | null
    profile_url?: string
    username?: string
    contributions?: ContributionCreateNestedManyWithoutUserInput
    recommendedRepos?: RecommendedRepoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserRepoStatsInput = {
    id?: string
    email?: string | null
    avatar_url?: string
    created_at?: Date | string
    display_name?: string | null
    github_id: string
    last_login_at?: Date | string | null
    profile_url?: string
    username?: string
    contributions?: ContributionUncheckedCreateNestedManyWithoutUserInput
    recommendedRepos?: RecommendedRepoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserRepoStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRepoStatsInput, UserUncheckedCreateWithoutUserRepoStatsInput>
  }

  export type RepositoryUpsertWithoutUserRepoStatsInput = {
    update: XOR<RepositoryUpdateWithoutUserRepoStatsInput, RepositoryUncheckedUpdateWithoutUserRepoStatsInput>
    create: XOR<RepositoryCreateWithoutUserRepoStatsInput, RepositoryUncheckedCreateWithoutUserRepoStatsInput>
    where?: RepositoryWhereInput
  }

  export type RepositoryUpdateToOneWithWhereWithoutUserRepoStatsInput = {
    where?: RepositoryWhereInput
    data: XOR<RepositoryUpdateWithoutUserRepoStatsInput, RepositoryUncheckedUpdateWithoutUserRepoStatsInput>
  }

  export type RepositoryUpdateWithoutUserRepoStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_repo_id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    html_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primary_language?: NullableStringFieldUpdateOperationsInput | string | null
    stars_count?: NullableIntFieldUpdateOperationsInput | number | null
    forks_count?: NullableIntFieldUpdateOperationsInput | number | null
    open_issues_count?: NullableIntFieldUpdateOperationsInput | number | null
    is_fork?: BoolFieldUpdateOperationsInput | boolean
    is_private?: BoolFieldUpdateOperationsInput | boolean
    last_pushed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contributions?: ContributionUpdateManyWithoutRepoNestedInput
    recommendedRepos?: RecommendedRepoUpdateManyWithoutRepoNestedInput
    fetchHistory?: RepoFetchHistoryUpdateManyWithoutRepoNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutUserRepoStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_repo_id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    html_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primary_language?: NullableStringFieldUpdateOperationsInput | string | null
    stars_count?: NullableIntFieldUpdateOperationsInput | number | null
    forks_count?: NullableIntFieldUpdateOperationsInput | number | null
    open_issues_count?: NullableIntFieldUpdateOperationsInput | number | null
    is_fork?: BoolFieldUpdateOperationsInput | boolean
    is_private?: BoolFieldUpdateOperationsInput | boolean
    last_pushed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contributions?: ContributionUncheckedUpdateManyWithoutRepoNestedInput
    recommendedRepos?: RecommendedRepoUncheckedUpdateManyWithoutRepoNestedInput
    fetchHistory?: RepoFetchHistoryUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type UserUpsertWithoutUserRepoStatsInput = {
    update: XOR<UserUpdateWithoutUserRepoStatsInput, UserUncheckedUpdateWithoutUserRepoStatsInput>
    create: XOR<UserCreateWithoutUserRepoStatsInput, UserUncheckedCreateWithoutUserRepoStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRepoStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRepoStatsInput, UserUncheckedUpdateWithoutUserRepoStatsInput>
  }

  export type UserUpdateWithoutUserRepoStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    github_id?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_url?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contributions?: ContributionUpdateManyWithoutUserNestedInput
    recommendedRepos?: RecommendedRepoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRepoStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    github_id?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_url?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contributions?: ContributionUncheckedUpdateManyWithoutUserNestedInput
    recommendedRepos?: RecommendedRepoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RepositoryCreateWithoutRecommendedReposInput = {
    id?: string
    github_repo_id: string
    owner: string
    name: string
    full_name: string
    html_url: string
    description?: string | null
    primary_language?: string | null
    stars_count?: number | null
    forks_count?: number | null
    open_issues_count?: number | null
    is_fork?: boolean
    is_private?: boolean
    last_pushed_at?: Date | string | null
    contributions?: ContributionCreateNestedManyWithoutRepoInput
    fetchHistory?: RepoFetchHistoryCreateNestedManyWithoutRepoInput
    userRepoStats?: UserRepoStatCreateNestedManyWithoutRepoInput
  }

  export type RepositoryUncheckedCreateWithoutRecommendedReposInput = {
    id?: string
    github_repo_id: string
    owner: string
    name: string
    full_name: string
    html_url: string
    description?: string | null
    primary_language?: string | null
    stars_count?: number | null
    forks_count?: number | null
    open_issues_count?: number | null
    is_fork?: boolean
    is_private?: boolean
    last_pushed_at?: Date | string | null
    contributions?: ContributionUncheckedCreateNestedManyWithoutRepoInput
    fetchHistory?: RepoFetchHistoryUncheckedCreateNestedManyWithoutRepoInput
    userRepoStats?: UserRepoStatUncheckedCreateNestedManyWithoutRepoInput
  }

  export type RepositoryCreateOrConnectWithoutRecommendedReposInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutRecommendedReposInput, RepositoryUncheckedCreateWithoutRecommendedReposInput>
  }

  export type UserCreateWithoutRecommendedReposInput = {
    id?: string
    email?: string | null
    avatar_url?: string
    created_at?: Date | string
    display_name?: string | null
    github_id: string
    last_login_at?: Date | string | null
    profile_url?: string
    username?: string
    contributions?: ContributionCreateNestedManyWithoutUserInput
    userRepoStats?: UserRepoStatCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecommendedReposInput = {
    id?: string
    email?: string | null
    avatar_url?: string
    created_at?: Date | string
    display_name?: string | null
    github_id: string
    last_login_at?: Date | string | null
    profile_url?: string
    username?: string
    contributions?: ContributionUncheckedCreateNestedManyWithoutUserInput
    userRepoStats?: UserRepoStatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecommendedReposInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecommendedReposInput, UserUncheckedCreateWithoutRecommendedReposInput>
  }

  export type RepositoryUpsertWithoutRecommendedReposInput = {
    update: XOR<RepositoryUpdateWithoutRecommendedReposInput, RepositoryUncheckedUpdateWithoutRecommendedReposInput>
    create: XOR<RepositoryCreateWithoutRecommendedReposInput, RepositoryUncheckedCreateWithoutRecommendedReposInput>
    where?: RepositoryWhereInput
  }

  export type RepositoryUpdateToOneWithWhereWithoutRecommendedReposInput = {
    where?: RepositoryWhereInput
    data: XOR<RepositoryUpdateWithoutRecommendedReposInput, RepositoryUncheckedUpdateWithoutRecommendedReposInput>
  }

  export type RepositoryUpdateWithoutRecommendedReposInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_repo_id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    html_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primary_language?: NullableStringFieldUpdateOperationsInput | string | null
    stars_count?: NullableIntFieldUpdateOperationsInput | number | null
    forks_count?: NullableIntFieldUpdateOperationsInput | number | null
    open_issues_count?: NullableIntFieldUpdateOperationsInput | number | null
    is_fork?: BoolFieldUpdateOperationsInput | boolean
    is_private?: BoolFieldUpdateOperationsInput | boolean
    last_pushed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contributions?: ContributionUpdateManyWithoutRepoNestedInput
    fetchHistory?: RepoFetchHistoryUpdateManyWithoutRepoNestedInput
    userRepoStats?: UserRepoStatUpdateManyWithoutRepoNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutRecommendedReposInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_repo_id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    html_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primary_language?: NullableStringFieldUpdateOperationsInput | string | null
    stars_count?: NullableIntFieldUpdateOperationsInput | number | null
    forks_count?: NullableIntFieldUpdateOperationsInput | number | null
    open_issues_count?: NullableIntFieldUpdateOperationsInput | number | null
    is_fork?: BoolFieldUpdateOperationsInput | boolean
    is_private?: BoolFieldUpdateOperationsInput | boolean
    last_pushed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contributions?: ContributionUncheckedUpdateManyWithoutRepoNestedInput
    fetchHistory?: RepoFetchHistoryUncheckedUpdateManyWithoutRepoNestedInput
    userRepoStats?: UserRepoStatUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type UserUpsertWithoutRecommendedReposInput = {
    update: XOR<UserUpdateWithoutRecommendedReposInput, UserUncheckedUpdateWithoutRecommendedReposInput>
    create: XOR<UserCreateWithoutRecommendedReposInput, UserUncheckedCreateWithoutRecommendedReposInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecommendedReposInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecommendedReposInput, UserUncheckedUpdateWithoutRecommendedReposInput>
  }

  export type UserUpdateWithoutRecommendedReposInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    github_id?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_url?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contributions?: ContributionUpdateManyWithoutUserNestedInput
    userRepoStats?: UserRepoStatUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecommendedReposInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    github_id?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_url?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contributions?: ContributionUncheckedUpdateManyWithoutUserNestedInput
    userRepoStats?: UserRepoStatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RepositoryCreateWithoutFetchHistoryInput = {
    id?: string
    github_repo_id: string
    owner: string
    name: string
    full_name: string
    html_url: string
    description?: string | null
    primary_language?: string | null
    stars_count?: number | null
    forks_count?: number | null
    open_issues_count?: number | null
    is_fork?: boolean
    is_private?: boolean
    last_pushed_at?: Date | string | null
    contributions?: ContributionCreateNestedManyWithoutRepoInput
    recommendedRepos?: RecommendedRepoCreateNestedManyWithoutRepoInput
    userRepoStats?: UserRepoStatCreateNestedManyWithoutRepoInput
  }

  export type RepositoryUncheckedCreateWithoutFetchHistoryInput = {
    id?: string
    github_repo_id: string
    owner: string
    name: string
    full_name: string
    html_url: string
    description?: string | null
    primary_language?: string | null
    stars_count?: number | null
    forks_count?: number | null
    open_issues_count?: number | null
    is_fork?: boolean
    is_private?: boolean
    last_pushed_at?: Date | string | null
    contributions?: ContributionUncheckedCreateNestedManyWithoutRepoInput
    recommendedRepos?: RecommendedRepoUncheckedCreateNestedManyWithoutRepoInput
    userRepoStats?: UserRepoStatUncheckedCreateNestedManyWithoutRepoInput
  }

  export type RepositoryCreateOrConnectWithoutFetchHistoryInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutFetchHistoryInput, RepositoryUncheckedCreateWithoutFetchHistoryInput>
  }

  export type RepositoryUpsertWithoutFetchHistoryInput = {
    update: XOR<RepositoryUpdateWithoutFetchHistoryInput, RepositoryUncheckedUpdateWithoutFetchHistoryInput>
    create: XOR<RepositoryCreateWithoutFetchHistoryInput, RepositoryUncheckedCreateWithoutFetchHistoryInput>
    where?: RepositoryWhereInput
  }

  export type RepositoryUpdateToOneWithWhereWithoutFetchHistoryInput = {
    where?: RepositoryWhereInput
    data: XOR<RepositoryUpdateWithoutFetchHistoryInput, RepositoryUncheckedUpdateWithoutFetchHistoryInput>
  }

  export type RepositoryUpdateWithoutFetchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_repo_id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    html_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primary_language?: NullableStringFieldUpdateOperationsInput | string | null
    stars_count?: NullableIntFieldUpdateOperationsInput | number | null
    forks_count?: NullableIntFieldUpdateOperationsInput | number | null
    open_issues_count?: NullableIntFieldUpdateOperationsInput | number | null
    is_fork?: BoolFieldUpdateOperationsInput | boolean
    is_private?: BoolFieldUpdateOperationsInput | boolean
    last_pushed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contributions?: ContributionUpdateManyWithoutRepoNestedInput
    recommendedRepos?: RecommendedRepoUpdateManyWithoutRepoNestedInput
    userRepoStats?: UserRepoStatUpdateManyWithoutRepoNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutFetchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    github_repo_id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    html_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primary_language?: NullableStringFieldUpdateOperationsInput | string | null
    stars_count?: NullableIntFieldUpdateOperationsInput | number | null
    forks_count?: NullableIntFieldUpdateOperationsInput | number | null
    open_issues_count?: NullableIntFieldUpdateOperationsInput | number | null
    is_fork?: BoolFieldUpdateOperationsInput | boolean
    is_private?: BoolFieldUpdateOperationsInput | boolean
    last_pushed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contributions?: ContributionUncheckedUpdateManyWithoutRepoNestedInput
    recommendedRepos?: RecommendedRepoUncheckedUpdateManyWithoutRepoNestedInput
    userRepoStats?: UserRepoStatUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type ContributionCreateManyUserInput = {
    id?: string
    repo_id: string
    type: string
    github_event_id?: string | null
    event_url?: string | null
    event_date?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RecommendedRepoCreateManyUserInput = {
    id?: string
    repo_id: string
    score?: number | null
    recommended_at?: Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserRepoStatCreateManyUserInput = {
    id?: string
    repo_id: string
    total_commits?: number
    total_prs?: number
    total_issues?: number
    last_updated_at?: Date | string
  }

  export type ContributionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    repo?: RepositoryUpdateOneRequiredWithoutContributionsNestedInput
  }

  export type ContributionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repo_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repo_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendedRepoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
    repo?: RepositoryUpdateOneRequiredWithoutRecommendedReposNestedInput
  }

  export type RecommendedRepoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repo_id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RecommendedRepoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repo_id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserRepoStatUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_commits?: IntFieldUpdateOperationsInput | number
    total_prs?: IntFieldUpdateOperationsInput | number
    total_issues?: IntFieldUpdateOperationsInput | number
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    repo?: RepositoryUpdateOneRequiredWithoutUserRepoStatsNestedInput
  }

  export type UserRepoStatUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repo_id?: StringFieldUpdateOperationsInput | string
    total_commits?: IntFieldUpdateOperationsInput | number
    total_prs?: IntFieldUpdateOperationsInput | number
    total_issues?: IntFieldUpdateOperationsInput | number
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRepoStatUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repo_id?: StringFieldUpdateOperationsInput | string
    total_commits?: IntFieldUpdateOperationsInput | number
    total_prs?: IntFieldUpdateOperationsInput | number
    total_issues?: IntFieldUpdateOperationsInput | number
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionCreateManyRepoInput = {
    id?: string
    user_id: string
    type: string
    github_event_id?: string | null
    event_url?: string | null
    event_date?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RecommendedRepoCreateManyRepoInput = {
    id?: string
    user_id: string
    score?: number | null
    recommended_at?: Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RepoFetchHistoryCreateManyRepoInput = {
    id?: string
    fetched_at?: Date | string
    status: string
    raw_metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserRepoStatCreateManyRepoInput = {
    id?: string
    user_id: string
    total_commits?: number
    total_prs?: number
    total_issues?: number
    last_updated_at?: Date | string
  }

  export type ContributionUpdateWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContributionsNestedInput
  }

  export type ContributionUncheckedUpdateWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUncheckedUpdateManyWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendedRepoUpdateWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutRecommendedReposNestedInput
  }

  export type RecommendedRepoUncheckedUpdateWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RecommendedRepoUncheckedUpdateManyWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags_matched?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RepoFetchHistoryUpdateWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fetched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    raw_metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RepoFetchHistoryUncheckedUpdateWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fetched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    raw_metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RepoFetchHistoryUncheckedUpdateManyWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fetched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    raw_metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserRepoStatUpdateWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_commits?: IntFieldUpdateOperationsInput | number
    total_prs?: IntFieldUpdateOperationsInput | number
    total_issues?: IntFieldUpdateOperationsInput | number
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserRepoStatsNestedInput
  }

  export type UserRepoStatUncheckedUpdateWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    total_commits?: IntFieldUpdateOperationsInput | number
    total_prs?: IntFieldUpdateOperationsInput | number
    total_issues?: IntFieldUpdateOperationsInput | number
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRepoStatUncheckedUpdateManyWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    total_commits?: IntFieldUpdateOperationsInput | number
    total_prs?: IntFieldUpdateOperationsInput | number
    total_issues?: IntFieldUpdateOperationsInput | number
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}