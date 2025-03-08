/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    interface FloatBinaryOperator extends Internal.DoubleBinaryOperator, Internal.BinaryOperator<number> {
        /**
         * @deprecated
        */
        apply(arg0: number, arg1: number): number;
        andThen<V>(arg0: Internal.Function_<number, V>): Internal.BiFunction<number, number, V>;
        /**
         * @deprecated
        */
        apply(arg0: any, arg1: any): any;
        abstract apply(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number, arg1: number): number;
        abstract "apply(float,float)"(arg0: number, arg1: number): number;
        maxBy<T>(arg0: Internal.Comparator_<T>): Internal.BinaryOperator<T>;
        minBy<T>(arg0: Internal.Comparator_<T>): Internal.BinaryOperator<T>;
        /**
         * @deprecated
        */
        "apply(java.lang.Float,java.lang.Float)"(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        "apply(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
    }
    type FloatBinaryOperator_ = FloatBinaryOperator;
    class ClientboundEntityEventPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Entity_, arg1: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        getEntity(arg0: Internal.Level_): Internal.Entity;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        getEventId(): number;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get eventId(): number
    }
    type ClientboundEntityEventPacket_ = ClientboundEntityEventPacket;
    class Minecart extends Internal.AbstractMinecart {
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Level_)
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        getPos(arg0: number, arg1: number, arg2: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getBlockZ(): number;
        isSuppressingBounce(): boolean;
        setHurtTime(arg0: number): void;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        isOnFire(): boolean;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        rotate(arg0: Internal.Rotation_): number;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        static registerCollisionHandler(arg0: Internal.IMinecartCollisionHandler_): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        alwaysAccepts(): boolean;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        isVisuallyCrawling(): boolean;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMaxSpeedAirLateral(arg0: number): void;
        setMotionZ(z: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        ignoreExplosion(): boolean;
        canFreeze(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
        shouldDoRailFunctions(): boolean;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        getRandomZ(arg0: number): number;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getPosition(arg0: number): Vec3d;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        getDamage(): number;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        getPosOffs(arg0: number, arg1: number, arg2: number, arg3: number): Vec3d;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        getDisplayBlockState(): Internal.BlockState;
        getBlockX(): number;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getEncodeId(): string;
        getY(arg0: number): number;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        invalidateCaps(): void;
        getName(): Internal.Component;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getCollisionHandler(): Internal.IMinecartCollisionHandler;
        getYaw(): number;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getRemainingFireTicks(): number;
        getControllingPassenger(): Internal.LivingEntity;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getTicksFrozen(): number;
        handler$zcl000$isInvisibleTo(arg0: Player_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getRandomX(arg0: number): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        setStatusMessage(message: Internal.Component_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        addTag(arg0: string): boolean;
        playerTouch(arg0: Player_): void;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setDamage(arg0: number): void;
        getDisplayOffset(): number;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        setTicksFrozen(arg0: number): void;
        setCanUseRail(arg0: boolean): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getMyRidingOffset(): number;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        hasCustomName(): boolean;
        isLiving(): boolean;
        getX(): number;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        isVehicle(): boolean;
        getLeashOffset(): Vec3d;
        isAttackable(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        handler$zcl000$setTicksFrozen(arg0: number, arg1: Internal.CallbackInfo_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        hasPassenger(arg0: Internal.Entity_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        handleInsidePortal(arg0: BlockPos_): void;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        isOnRails(): boolean;
        restoreFrom(arg0: Internal.Entity_): void;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setYaw(arg0: number): void;
        setCurrentCartSpeedCapOnRail(arg0: number): void;
        getPickRadius(): number;
        notify(): void;
        getFirstTick(): boolean;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getRotationVector(): Internal.Vec2;
        refreshDimensions(): void;
        self(): Internal.Entity;
        isSprinting(): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getMotionY(): number;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getServer(): Internal.MinecraftServer;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        getFirstPassenger(): Internal.Entity;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        interact(arg0: Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        setHurtDir(arg0: number): void;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        getSoundSource(): Internal.SoundSource;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        getHurtDir(): number;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getMaxSpeedAirLateral(): number;
        getMotionZ(): number;
        removeVehicle(): void;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        setZ(z: number): void;
        getY(): number;
        ejectPassengers(): void;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getProfile(): Internal.GameProfile;
        static setViewScale(arg0: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        setCustomDisplay(arg0: boolean): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        canBeRidden(): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        position(): Vec3d;
        displayFireAnimation(): boolean;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        getMotionDirection(): Internal.Direction;
        canBeCollidedWith(): boolean;
        setY(y: number): void;
        getFeetBlockState(): Internal.BlockState;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        canChangeDimensions(): boolean;
        getCommandSenderWorld(): Internal.Level;
        positionRider(arg0: Internal.Entity_): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        baseTick(): void;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        getComparatorLevel(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        getMaxAirSupply(): number;
        isVisuallySwimming(): boolean;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFacing(): Internal.Direction;
        hasCustomDisplay(): boolean;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        isSwimming(): boolean;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setSprinting(arg0: boolean): void;
        setPortalCooldown(): void;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        setDisplayOffset(arg0: number): void;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getPortalWaitTime(): number;
        isInWater(): boolean;
        getBlockStateOn(): Internal.BlockState;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        setMaxSpeedAirVertical(arg0: number): void;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Player_): boolean;
        setAirSupply(arg0: number): void;
        getRootVehicle(): Internal.Entity;
        getOnPos(): BlockPos;
        save(arg0: Internal.CompoundTag_): boolean;
        isNoGravity(): boolean;
        getStepHeight(): number;
        getDefaultDisplayOffset(): number;
        acceptsFailure(): boolean;
        getMaxSpeedAirVertical(): number;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        getUuid(): Internal.UUID;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        canUseRail(): boolean;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getCurrentRailPosition(): BlockPos;
        setSilent(arg0: boolean): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        kill(): void;
        isOnPortalCooldown(): boolean;
        animateHurt(arg0: number): void;
        static createMinecart(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: Internal.AbstractMinecart$Type_): Internal.AbstractMinecart;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isAlwaysTicking(): boolean;
        interactAt(arg0: Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        revive(): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        setDragAir(arg0: number): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        "getName()"(): Internal.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        activateMinecart(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        getMaxCartSpeedOnRail(): number;
        canUpdate(): boolean;
        getTicksRequiredToFreeze(): number;
        /**
         * @deprecated
        */
        maxUpStep(): number;
        getSlopeAdjustment(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        isAlive(): boolean;
        handler$zdd000$changeGlowOutline(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getBbHeight(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getTags(): Internal.Set<string>;
        getViewVector(arg0: number): Vec3d;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        getMinecartType(): Internal.AbstractMinecart$Type;
        hasControllingPassenger(): boolean;
        moveMinecartOnRail(arg0: BlockPos_): void;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPickResult(): Internal.ItemStack;
        getPercentFrozen(): number;
        getRandomY(): number;
        setPortalCooldown(arg0: number): void;
        getDisplayName(): Internal.Component;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        hasGlowingTag(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        destroy(arg0: DamageSource_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        notifyAll(): void;
        getPassengersRidingOffset(): number;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        isPushable(): boolean;
        discard(): void;
        setYBodyRot(arg0: number): void;
        onClientRemoval(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        isPoweredCart(): boolean;
        getDragAir(): number;
        setRotation(yaw: number, pitch: number): void;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getType(): string;
        getLightProbePosition(arg0: number): Vec3d;
        getDefaultDisplayBlockState(): Internal.BlockState;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        checkDespawn(): void;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getHurtTime(): number;
        lerpHeadTo(arg0: number, arg1: number): void;
        static getViewScale(): number;
        setMotionX(x: number): void;
        handler$zcl000$isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        getCurrentCartSpeedCapOnRail(): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        isDiscrete(): boolean;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        extinguish(): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        tell(message: Internal.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        getMaxSpeedWithRail(): number;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setDisplayBlockState(arg0: Internal.BlockState_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get blockZ(): number
        get suppressingBounce(): boolean
        set hurtTime(arg0: number)
        get silent(): boolean
        get pitch(): number
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get visuallyCrawling(): boolean
        set maxSpeedAirLateral(arg0: number)
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        get persistentData(): Internal.CompoundTag
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get damage(): number
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        get displayBlockState(): Internal.BlockState
        get blockX(): number
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get encodeId(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): Internal.Component
        get controlledVehicle(): Internal.Entity
        get eyePosition(): Vec3d
        get eyeHeight(): number
        get collisionHandler(): Internal.IMinecartCollisionHandler
        get yaw(): number
        set customNameVisible(arg0: boolean)
        get remainingFireTicks(): number
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        get id(): number
        get ticksFrozen(): number
        get eyeY(): number
        set statusMessage(message: Internal.Component_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get YHeadRot(): number
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        set damage(arg0: number)
        get displayOffset(): number
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        set canUseRail(arg0: boolean)
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get living(): boolean
        get x(): number
        get glowing(): boolean
        get vehicle(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        get underWater(): boolean
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get onRails(): boolean
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        set currentCartSpeedCapOnRail(arg0: number)
        get pickRadius(): number
        get firstTick(): boolean
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get rotationVector(): Internal.Vec2
        get sprinting(): boolean
        get motionY(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get firstPassenger(): Internal.Entity
        set hurtDir(arg0: number)
        get soundSource(): Internal.SoundSource
        get pose(): Internal.Pose
        get hurtDir(): number
        get lookAngle(): Vec3d
        get maxSpeedAirLateral(): number
        get motionZ(): number
        get invisible(): boolean
        set z(z: number)
        get y(): number
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        set customDisplay(arg0: boolean)
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get commandSenderWorld(): Internal.Level
        get comparatorLevel(): number
        get customName(): Internal.Component
        get class(): typeof any
        get maxAirSupply(): number
        get visuallySwimming(): boolean
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get nameTagOffsetY(): number
        set displayOffset(arg0: number)
        get invulnerable(): boolean
        get inLava(): boolean
        get portalWaitTime(): number
        get inWater(): boolean
        get blockStateOn(): Internal.BlockState
        set maxSpeedAirVertical(arg0: number)
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get rootVehicle(): Internal.Entity
        get onPos(): BlockPos
        get noGravity(): boolean
        get stepHeight(): number
        get defaultDisplayOffset(): number
        get maxSpeedAirVertical(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        get currentRailPosition(): BlockPos
        set silent(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        set dragAir(arg0: number)
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): Internal.Component
        get inFluidType(): boolean
        get maxCartSpeedOnRail(): number
        get ticksRequiredToFreeze(): number
        get slopeAdjustment(): number
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get minecartType(): Internal.AbstractMinecart$Type
        get pickResult(): Internal.ItemStack
        get percentFrozen(): number
        get randomY(): number
        set portalCooldown(arg0: number)
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set pose(arg0: Internal.Pose_)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get poweredCart(): boolean
        get dragAir(): number
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get defaultDisplayBlockState(): Internal.BlockState
        get passenger(): boolean
        get hurtTime(): number
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        get currentCartSpeedCapOnRail(): number
        get teamColor(): number
        get discrete(): boolean
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get freezing(): boolean
        get maxSpeedWithRail(): number
        get fullyFrozen(): boolean
        set displayBlockState(arg0: Internal.BlockState_)
        set sharedFlagOnFire(arg0: boolean)
    }
    type Minecart_ = Minecart;
    class FoliagePlacerType <P extends Internal.FoliagePlacer> {
        constructor(arg0: Internal.Codec_<P>)
        getClass(): typeof any;
        codec(): Internal.Codec<P>;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly MEGA_JUNGLE_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.MegaJungleFoliagePlacer>;
        static readonly FANCY_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.FancyFoliagePlacer>;
        static readonly RANDOM_SPREAD_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.RandomSpreadFoliagePlacer>;
        static readonly CHERRY_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.CherryFoliagePlacer>;
        static readonly DARK_OAK_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.DarkOakFoliagePlacer>;
        static readonly SPRUCE_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.SpruceFoliagePlacer>;
        static readonly BLOB_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.BlobFoliagePlacer>;
        static readonly PINE_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.PineFoliagePlacer>;
        static readonly MEGA_PINE_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.MegaPineFoliagePlacer>;
        static readonly ACACIA_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.AcaciaFoliagePlacer>;
        static readonly BUSH_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.BushFoliagePlacer>;
    }
    type FoliagePlacerType_<P extends Internal.FoliagePlacer> = FoliagePlacerType<P> | Special.FoliagePlacerType;
    interface PathIterator {
        abstract next(): void;
        abstract "currentSegment(float[])"(arg0: number[]): number;
        abstract "currentSegment(double[])"(arg0: number[]): number;
        abstract isDone(): boolean;
        abstract getWindingRule(): number;
        abstract currentSegment(arg0: number[]): number;
        abstract currentSegment(arg0: number[]): number;
        get done(): boolean
        get windingRule(): number
        readonly SEG_MOVETO: (0) & (number);
        readonly WIND_NON_ZERO: (1) & (number);
        readonly SEG_LINETO: (1) & (number);
        readonly SEG_CUBICTO: (3) & (number);
        readonly WIND_EVEN_ODD: (0) & (number);
        readonly SEG_QUADTO: (2) & (number);
        readonly SEG_CLOSE: (4) & (number);
    }
    type PathIterator_ = PathIterator;
    class FogParticleOptions extends Internal.DustParticleOptionsBase {
        constructor(arg0: Vec3f_, arg1: number)
        getClass(): typeof any;
        static "readVector3f(net.minecraft.network.FriendlyByteBuf)"(arg0: Internal.FriendlyByteBuf_): Vec3f;
        toString(): string;
        static "readVector3f(com.mojang.brigadier.StringReader)"(arg0: Internal.StringReader_): Vec3f;
        notifyAll(): void;
        writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getScale(): number;
        static readVector3f(arg0: Internal.StringReader_): Vec3f;
        hashCode(): number;
        static readVector3f(arg0: Internal.FriendlyByteBuf_): Vec3f;
        getType(): Internal.ParticleType<Internal.FogParticleOptions>;
        getColor(): Vec3f;
        wait(): void;
        writeToString(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get scale(): number
        get type(): Internal.ParticleType<Internal.FogParticleOptions>
        get color(): Vec3f
        static readonly CODEC: Internal.Codec<Internal.FogParticleOptions>;
        static readonly DESERIALIZER: Internal.ParticleOptions$Deserializer<Internal.FogParticleOptions>;
    }
    type FogParticleOptions_ = FogParticleOptions;
    abstract class IntBuffer extends Internal.Buffer implements Internal.Comparable<Internal.IntBuffer> {
        put(arg0: number, arg1: Internal.IntBuffer_, arg2: number, arg3: number): this;
        reset(): Internal.Buffer;
        abstract isDirect(): boolean;
        limit(): number;
        notify(): void;
        compareTo(arg0: any): number;
        static wrap(arg0: number[], arg1: number, arg2: number): Internal.IntBuffer;
        abstract order(): Internal.ByteOrder;
        "put(int,java.nio.IntBuffer,int,int)"(arg0: number, arg1: Internal.IntBuffer_, arg2: number, arg3: number): this;
        static wrap(arg0: number[]): Internal.IntBuffer;
        mismatch(arg0: Internal.IntBuffer_): number;
        abstract put(arg0: number): this;
        "get(int[])"(arg0: number[]): this;
        "put(int,int[])"(arg0: number, arg1: number[]): this;
        abstract "put(int)"(arg0: number): this;
        position(): number;
        abstract duplicate(): this;
        "compareTo(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): number;
        "put(int,int[],int,int)"(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        slice(): Internal.Buffer;
        wait(): void;
        put(arg0: number[], arg1: number, arg2: number): this;
        abstract put(arg0: number, arg1: number): this;
        abstract isReadOnly(): boolean;
        position(arg0: number): this;
        "compareTo(java.lang.Object)"(arg0: any): number;
        abstract get(): number;
        get(arg0: number[], arg1: number, arg2: number): this;
        getClass(): typeof any;
        "put(int[])"(arg0: number[]): this;
        capacity(): number;
        arrayOffset(): number;
        wait(arg0: number, arg1: number): void;
        clear(): Internal.Buffer;
        flip(): Internal.Buffer;
        put(arg0: Internal.IntBuffer_): this;
        put(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        hasArray(): boolean;
        get(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        compareTo(arg0: Internal.IntBuffer_): number;
        put(arg0: number[]): this;
        toString(): string;
        remaining(): number;
        "put(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): this;
        rewind(): Internal.Buffer;
        notifyAll(): void;
        static allocate(arg0: number): Internal.IntBuffer;
        abstract compact(): this;
        mark(): Internal.Buffer;
        hashCode(): number;
        hasRemaining(): boolean;
        abstract "put(int,int)"(arg0: number, arg1: number): this;
        get(arg0: number, arg1: number[]): this;
        wait(arg0: number): void;
        abstract get(arg0: number): number;
        put(arg0: number, arg1: number[]): this;
        abstract asReadOnlyBuffer(): this;
        get(arg0: number[]): this;
        limit(arg0: number): this;
        slice(arg0: number, arg1: number): Internal.Buffer;
        equals(arg0: any): boolean;
        abstract "get(int)"(arg0: number): number;
        array(): number[];
        get direct(): boolean
        get readOnly(): boolean
        get class(): typeof any
    }
    type IntBuffer_ = IntBuffer;
    interface NarratableEntry extends Internal.NarrationSupplier, Internal.TabOrderedElement {
        abstract narrationPriority(): Internal.NarratableEntry$NarrationPriority;
        abstract updateNarration(arg0: Internal.NarrationElementOutput_): void;
        isActive(): boolean;
        getTabOrderGroup(): number;
        get active(): boolean
        get tabOrderGroup(): number
    }
    type NarratableEntry_ = NarratableEntry;
    class CanBeReplacedCallbackJS {
        constructor(blockPlaceContext: Internal.BlockPlaceContext_, state: Internal.BlockState_)
        getClass(): typeof any;
        getClickedFace(): Internal.Direction;
        getHorizontalDirection(): Internal.Direction;
        getRotation(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        getNearestLookingDirection(): Internal.Direction;
        getClickLocation(): Vec3d;
        getNearestLookingVerticalDirection(): Internal.Direction;
        isSecondaryUseActive(): boolean;
        isClickedPosIn(fluid: Internal.Fluid_): boolean;
        getHand(): Internal.InteractionHand;
        getClickedPos(): BlockPos;
        getPlayer(): Player;
        isInside(): boolean;
        toString(): string;
        getClickedBlock(): Internal.BlockContainerJS;
        getNearestLookingDirections(): Internal.Direction[];
        getItem(): Internal.ItemStack;
        notifyAll(): void;
        getFluidStateAtClickedPos(): Internal.FluidState;
        canBeReplaced(): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get clickedFace(): Internal.Direction
        get horizontalDirection(): Internal.Direction
        get rotation(): number
        get level(): Internal.Level
        get nearestLookingDirection(): Internal.Direction
        get clickLocation(): Vec3d
        get nearestLookingVerticalDirection(): Internal.Direction
        get secondaryUseActive(): boolean
        get hand(): Internal.InteractionHand
        get clickedPos(): BlockPos
        get player(): Player
        get inside(): boolean
        get clickedBlock(): Internal.BlockContainerJS
        get nearestLookingDirections(): Internal.Direction[]
        get item(): Internal.ItemStack
        get fluidStateAtClickedPos(): Internal.FluidState
    }
    type CanBeReplacedCallbackJS_ = CanBeReplacedCallbackJS;
    class ChunkStatus$ChunkType extends Internal.Enum<Internal.ChunkStatus$ChunkType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        "compareTo(net.minecraft.world.level.chunk.ChunkStatus$ChunkType)"(arg0: Internal.ChunkStatus$ChunkType_): number;
        static values(): Internal.ChunkStatus$ChunkType[];
        toString(): string;
        notifyAll(): void;
        notify(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ChunkStatus$ChunkType>>;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static valueOf(arg0: string): Internal.ChunkStatus$ChunkType;
        getDeclaringClass(): typeof Internal.ChunkStatus$ChunkType;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.ChunkStatus$ChunkType_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.ChunkStatus$ChunkType
        static readonly PROTOCHUNK: (Internal.ChunkStatus$ChunkType) & (Internal.ChunkStatus$ChunkType);
        static readonly LEVELCHUNK: (Internal.ChunkStatus$ChunkType) & (Internal.ChunkStatus$ChunkType);
    }
    type ChunkStatus$ChunkType_ = ChunkStatus$ChunkType | "levelchunk" | "protochunk";
    class RecordItem extends Internal.Item {
        constructor(arg0: number, arg1: Internal.SoundEvent_, arg2: Internal.Item$Properties_, arg3: number)
        constructor(arg0: number, arg1: Internal.Supplier_<Internal.SoundEvent>, arg2: Internal.Item$Properties_, arg3: number)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): Internal.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getSound(): Internal.SoundEvent;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getDisplayName(): Internal.MutableComponent;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getLengthInTicks(): number;
        getAnalogOutput(): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        static getBySound(arg0: Internal.SoundEvent_): Internal.RecordItem;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        handler$zcm000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        get sound(): Internal.SoundEvent
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get displayName(): Internal.MutableComponent
        get id(): string
        get lengthInTicks(): number
        get analogOutput(): number
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        /**
         * @deprecated
        */
        static readonly BY_NAME: ({[key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem}) & (Internal.Map<Internal.SoundEvent, Internal.RecordItem>);
    }
    type RecordItem_ = RecordItem;
    class NonNullList <E> extends Internal.AbstractList<E> {
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        static createWithCapacity<E>(arg0: number): Internal.NonNullList<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        sort(arg0: Internal.Comparator_<E>): void;
        notify(): void;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        "remove(int)"(arg0: number): E;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        addAll(arg0: number, arg1: Internal.Collection_<E>): boolean;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        subList(arg0: number, arg1: number): Internal.List<E>;
        indexOf(arg0: any): number;
        add(arg0: number, arg1: E): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        abstract "remove(java.lang.Object)"(arg0: any): boolean;
        listIterator(arg0: number): Internal.ListIterator<E>;
        iterator(): Internal.Iterator<E>;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.List<E>;
        lastIndexOf(arg0: any): number;
        getClass(): typeof any;
        get(arg0: number): E;
        add(arg0: E): boolean;
        listIterator(): Internal.ListIterator<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        parallelStream(): Internal.Stream<E>;
        abstract isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        static of<E>(arg0: E, ...arg1: E[]): Internal.NonNullList<E>;
        set(arg0: number, arg1: E): E;
        static of<E>(...arg0: E[]): Internal.List<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        static "of(java.lang.Object,java.lang.Object[])"<E>(arg0: E, ...arg1: E[]): Internal.NonNullList<E>;
        static "of(java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E): Internal.List<E>;
        remove(arg0: number): E;
        static create<E>(): Internal.NonNullList<E>;
        abstract contains(arg0: any): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.List<E>;
        replaceAll(arg0: Internal.UnaryOperator_<E>): void;
        toString(): string;
        notifyAll(): void;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        abstract toArray(): any[];
        size(): number;
        hashCode(): number;
        static withSize<E>(arg0: number, arg1: E): Internal.NonNullList<E>;
        clear(): void;
        wait(arg0: number): void;
        spliterator(): Internal.Spliterator<E>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get empty(): boolean
    }
    type NonNullList_<E> = NonNullList<E>;
    class Matrix2f implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix2fc {
        constructor()
        constructor(arg0: Internal.Matrix3fc_)
        constructor(arg0: Internal.FloatBuffer_)
        constructor(arg0: Internal.Matrix2fc_)
        constructor(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        normal(): this;
        rotate(arg0: number, arg1: Internal.Matrix2f_): this;
        m00(): number;
        normalizedPositiveX(arg0: Internal.Vector2f_): Internal.Vector2f;
        setRow(arg0: number, arg1: Internal.Vector2fc_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        getRow(arg0: number, arg1: Internal.Vector2f_): Internal.Vector2f;
        getColumn(arg0: number, arg1: Internal.Vector2f_): Internal.Vector2f;
        lerp(arg0: Internal.Matrix2fc_, arg1: number, arg2: Internal.Matrix2f_): this;
        scaling(arg0: number, arg1: number): this;
        mul(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        "getTransposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        "get(int,int)"(arg0: number, arg1: number): number;
        rotateLocal(arg0: number): this;
        "set(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_): this;
        scaleLocal(arg0: number, arg1: number, arg2: Internal.Matrix2f_): this;
        mulComponentWise(arg0: Internal.Matrix2fc_): this;
        sub(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        get(arg0: number[]): number[];
        transformTranspose(arg0: Internal.Vector2f_): Internal.Vector2f;
        "scaling(float)"(arg0: number): this;
        toString(arg0: Internal.NumberFormat_): string;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        "scale(float,float)"(arg0: number, arg1: number): this;
        get(arg0: number[], arg1: number): number[];
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transformTranspose(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): Internal.Vector2f;
        setFromAddress(arg0: number): this;
        m00(arg0: number): this;
        clone(): any;
        mulLocal(arg0: Internal.Matrix2fc_): this;
        m01(): number;
        getClass(): typeof any;
        "set(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        normalizedPositiveY(arg0: Internal.Vector2f_): Internal.Vector2f;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        getRotation(): number;
        add(arg0: Internal.Matrix2fc_): this;
        getScale(arg0: Internal.Vector2f_): Internal.Vector2f;
        set(arg0: Internal.ByteBuffer_): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        toString(): string;
        equals(arg0: Internal.Matrix2fc_, arg1: number): boolean;
        notifyAll(): void;
        "scale(org.joml.Vector2fc,org.joml.Matrix2f)"(arg0: Internal.Vector2fc_, arg1: Internal.Matrix2f_): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        scale(arg0: number): this;
        "scale(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        "scale(float)"(arg0: number): this;
        m01(arg0: number): this;
        getToAddress(arg0: number): Internal.Matrix2fc;
        wait(arg0: number): void;
        transformTranspose(arg0: number, arg1: number, arg2: Internal.Vector2f_): Internal.Vector2f;
        "scaling(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        setColumn(arg0: number, arg1: Internal.Vector2fc_): this;
        "set(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): this;
        invert(arg0: Internal.Matrix2f_): this;
        scale(arg0: number, arg1: number): this;
        "get(org.joml.Matrix3f)"(arg0: Matrix3f_): Matrix3f;
        scale(arg0: Internal.Vector2fc_, arg1: Internal.Matrix2f_): this;
        scaling(arg0: Internal.Vector2fc_): this;
        notify(): void;
        get(arg0: Internal.Matrix2f_): this;
        isFinite(): boolean;
        transform(arg0: Internal.Vector2f_): Internal.Vector2f;
        positiveX(arg0: Internal.Vector2f_): Internal.Vector2f;
        mul(arg0: Internal.Matrix2fc_): this;
        set(arg0: Internal.FloatBuffer_): this;
        normal(arg0: Internal.Matrix2f_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        m10(arg0: number): this;
        set(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_): this;
        m10(): number;
        sub(arg0: Internal.Matrix2fc_): this;
        "getTransposed(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        readExternal(arg0: Internal.ObjectInput_): void;
        set(arg0: Internal.Matrix3fc_): this;
        mulComponentWise(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        rotation(arg0: number): this;
        get(arg0: Matrix3f_): Matrix3f;
        "get(float[],int)"(arg0: number[], arg1: number): number[];
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "getTransposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        get(arg0: number, arg1: number): number;
        wait(): void;
        transform(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): Internal.Vector2f;
        lerp(arg0: Internal.Matrix2fc_, arg1: number): this;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        determinant(): number;
        "set(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        mulLocal(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        "set(org.joml.Vector2fc,org.joml.Vector2fc)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_): this;
        add(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        rotateLocal(arg0: number, arg1: Internal.Matrix2f_): this;
        setColumn(arg0: number, arg1: number, arg2: number): this;
        setRow(arg0: number, arg1: number, arg2: number): this;
        get(arg0: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        wait(arg0: number, arg1: number): void;
        set(arg0: Internal.Matrix2fc_): this;
        rotate(arg0: number): this;
        scale(arg0: number, arg1: number, arg2: Internal.Matrix2f_): this;
        "get(float[])"(arg0: number[]): number[];
        positiveY(arg0: Internal.Vector2f_): Internal.Vector2f;
        "get(org.joml.Matrix2f)"(arg0: Internal.Matrix2f_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        zero(): this;
        scaling(arg0: number): this;
        set(arg0: number[]): this;
        transpose(): this;
        "getTransposed(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "set(float[])"(arg0: number[]): this;
        set(arg0: Internal.Matrix3x2fc_): this;
        m11(arg0: number): this;
        "get(org.joml.Matrix3x2f)"(arg0: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        "scale(float,org.joml.Matrix2f)"(arg0: number, arg1: Internal.Matrix2f_): this;
        scale(arg0: number, arg1: Internal.Matrix2f_): this;
        set(arg0: number, arg1: number, arg2: number): this;
        m11(): number;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        transform(arg0: number, arg1: number, arg2: Internal.Vector2f_): Internal.Vector2f;
        identity(): this;
        invert(): this;
        hashCode(): number;
        scaleLocal(arg0: number, arg1: number): this;
        "set(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        swap(arg0: Internal.Matrix2f_): this;
        transpose(arg0: Internal.Matrix2f_): this;
        scale(arg0: Internal.Vector2fc_): this;
        equals(arg0: any): boolean;
        set "(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_)
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set fromAddress(arg0: number)
        get class(): typeof any
        get rotation(): number
        set "(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_)
        get finite(): boolean
        set "(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_)
        set "(float[])"(arg0: number[])
        set "(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_)
        m10: number;
        m01: number;
        m00: number;
        m11: number;
    }
    type Matrix2f_ = Matrix2f;
    class JigsawBlockEntity extends Internal.BlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        requestModelDataUpdate(): void;
        getName(): ResourceLocation;
        setLevel(arg0: Internal.Level_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        notify(): void;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        load(arg0: Internal.CompoundTag_): void;
        getFinalState(): string;
        setChanged(): void;
        setJoint(arg0: Internal.JigsawBlockEntity$JointType_): void;
        onLoad(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        setRemoved(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getType(): Internal.BlockEntityType<any>;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        setFinalState(arg0: string): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        getJoint(): Internal.JigsawBlockEntity$JointType;
        setPool(arg0: Internal.ResourceKey_<Internal.StructureTemplatePool>): void;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        generate(arg0: Internal.ServerLevel_, arg1: number, arg2: boolean): void;
        setTarget(arg0: ResourceLocation_): void;
        clearRemoved(): void;
        onlyOpCanSetNbt(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        saveWithFullMetadata(): Internal.CompoundTag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        getPersistentData(): Internal.CompoundTag;
        getTarget(): ResourceLocation;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        setName(arg0: ResourceLocation_): void;
        serializeNBT(): Internal.CompoundTag;
        getPool(): Internal.ResourceKey<Internal.StructureTemplatePool>;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getModelData(): Internal.ModelData;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        reviveCaps(): void;
        get updateTag(): Internal.CompoundTag
        get name(): ResourceLocation
        set level(arg0: Internal.Level_)
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get blockPos(): BlockPos
        get removed(): boolean
        get finalState(): string
        set joint(arg0: Internal.JigsawBlockEntity$JointType_)
        get blockState(): Internal.BlockState
        get type(): Internal.BlockEntityType<any>
        set finalState(arg0: string)
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get joint(): Internal.JigsawBlockEntity$JointType
        set pool(arg0: Internal.ResourceKey_<Internal.StructureTemplatePool>)
        get level(): Internal.Level
        set target(arg0: ResourceLocation_)
        get persistentData(): Internal.CompoundTag
        get target(): ResourceLocation
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        set name(arg0: ResourceLocation_)
        get pool(): Internal.ResourceKey<Internal.StructureTemplatePool>
        get modelData(): Internal.ModelData
        static readonly NAME: ("name") & (string);
        static readonly POOL: ("pool") & (string);
        static readonly JOINT: ("joint") & (string);
        static readonly TARGET: ("target") & (string);
        static readonly FINAL_STATE: ("final_state") & (string);
    }
    type JigsawBlockEntity_ = JigsawBlockEntity;
    class Matrix2d implements Internal.Cloneable, Internal.Matrix2dc, Internal.Externalizable {
        constructor(arg0: Internal.Matrix3fc_)
        constructor()
        constructor(arg0: Internal.Matrix2fc_)
        constructor(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.Matrix3dc_)
        constructor(arg0: Internal.Matrix2dc_)
        "scale(double,org.joml.Matrix2d)"(arg0: number, arg1: Internal.Matrix2d_): this;
        setColumn(arg0: number, arg1: Internal.Vector2dc_): this;
        mul(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "getTransposed(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        normal(): this;
        scaling(arg0: Internal.Vector2dc_): this;
        m01(): number;
        positiveY(arg0: Internal.Vector2d_): Internal.Vector2d;
        "getTransposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "set(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        mul(arg0: Internal.Matrix2dc_): this;
        sub(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        set(arg0: Internal.Matrix3dc_): this;
        "set(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_): this;
        transformTranspose(arg0: number, arg1: number, arg2: Internal.Vector2d_): Internal.Vector2d;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        "scale(double)"(arg0: number): this;
        "get(double[])"(arg0: number[]): number[];
        sub(arg0: Internal.Matrix2dc_): this;
        equals(arg0: Internal.Matrix2dc_, arg1: number): boolean;
        toString(arg0: Internal.NumberFormat_): string;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        setRow(arg0: number, arg1: number, arg2: number): this;
        scaling(arg0: number, arg1: number): this;
        swap(arg0: Internal.Matrix2d_): this;
        transformTranspose(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): Internal.Vector2d;
        scaling(arg0: number): this;
        rotation(arg0: number): this;
        rotateLocal(arg0: number, arg1: Internal.Matrix2d_): this;
        setFromAddress(arg0: number): this;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        "set(double[])"(arg0: number[]): this;
        clone(): any;
        getClass(): typeof any;
        set(arg0: Internal.Matrix2dc_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        invert(arg0: Internal.Matrix2d_): this;
        "set(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_): this;
        "mul(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_): this;
        normalizedPositiveX(arg0: Internal.Vector2d_): Internal.Vector2d;
        "set(org.joml.Matrix3x2dc)"(arg0: Internal.Matrix3x2dc_): this;
        m01(arg0: number): this;
        set(arg0: Internal.ByteBuffer_): this;
        getRow(arg0: number, arg1: Internal.Vector2d_): Internal.Vector2d;
        getColumn(arg0: number, arg1: Internal.Vector2d_): Internal.Vector2d;
        "scaling(double)"(arg0: number): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        get(arg0: Internal.Matrix2d_): this;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        transform(arg0: Internal.Vector2d_): Internal.Vector2d;
        mul(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2d_): this;
        m00(): number;
        set(arg0: Internal.Matrix3x2dc_): this;
        get(arg0: number[]): number[];
        "getTransposed(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        normal(arg0: Internal.Matrix2d_): this;
        determinant(): number;
        scale(arg0: number, arg1: number, arg2: Internal.Matrix2d_): this;
        scale(arg0: number, arg1: Internal.Matrix2d_): this;
        set(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_): this;
        toString(): string;
        notifyAll(): void;
        "mul(org.joml.Matrix2fc,org.joml.Matrix2d)"(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2d_): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        lerp(arg0: Internal.Matrix2dc_, arg1: number): this;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateLocal(arg0: number): this;
        getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        get(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        m11(): number;
        "get(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        wait(arg0: number): void;
        scale(arg0: Internal.Vector2dc_): this;
        scale(arg0: number): this;
        scale(arg0: Internal.Vector2dc_, arg1: Internal.Matrix2d_): this;
        setRow(arg0: number, arg1: Internal.Vector2dc_): this;
        "mul(org.joml.Matrix2dc,org.joml.Matrix2d)"(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        normalizedPositiveY(arg0: Internal.Vector2d_): Internal.Vector2d;
        notify(): void;
        get(arg0: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        m00(arg0: number): this;
        getScale(arg0: Internal.Vector2d_): Internal.Vector2d;
        set(arg0: Internal.DoubleBuffer_): this;
        isFinite(): boolean;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        mul(arg0: Internal.Matrix2fc_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mulComponentWise(arg0: Internal.Matrix2dc_): this;
        rotate(arg0: number): this;
        set(arg0: Internal.Matrix3fc_): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "mul(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        "getTransposed(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        readExternal(arg0: Internal.ObjectInput_): void;
        getRotation(): number;
        m11(arg0: number): this;
        scaleLocal(arg0: number, arg1: number): this;
        mulComponentWise(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        setColumn(arg0: number, arg1: number, arg2: number): this;
        scale(arg0: number, arg1: number): this;
        m10(): number;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        "getTransposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        transform(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): Internal.Vector2d;
        transpose(arg0: Internal.Matrix2d_): this;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        getToAddress(arg0: number): Internal.Matrix2dc;
        "set(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        add(arg0: Internal.Matrix2dc_): this;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        set(arg0: number, arg1: number, arg2: number): this;
        mulLocal(arg0: Internal.Matrix2dc_): this;
        rotate(arg0: number, arg1: Internal.Matrix2d_): this;
        mulLocal(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        add(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        lerp(arg0: Internal.Matrix2dc_, arg1: number, arg2: Internal.Matrix2d_): this;
        "scale(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        get(arg0: number[], arg1: number): number[];
        set(arg0: Internal.Matrix2fc_): this;
        set(arg0: number[]): this;
        wait(arg0: number, arg1: number): void;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transform(arg0: number, arg1: number, arg2: Internal.Vector2d_): Internal.Vector2d;
        positiveX(arg0: Internal.Vector2d_): Internal.Vector2d;
        scaleLocal(arg0: number, arg1: number, arg2: Internal.Matrix2d_): this;
        "get(org.joml.Matrix2d)"(arg0: Internal.Matrix2d_): this;
        transpose(): this;
        zero(): this;
        set(arg0: Internal.Matrix3x2fc_): this;
        "getTransposed(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "scaling(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        "get(org.joml.Matrix3x2d)"(arg0: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(double[],int)"(arg0: number[], arg1: number): number[];
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        get(arg0: number, arg1: number): number;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "set(org.joml.Vector2dc,org.joml.Vector2dc)"(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_): this;
        transformTranspose(arg0: Internal.Vector2d_): Internal.Vector2d;
        hashCode(): number;
        m10(arg0: number): this;
        "scale(org.joml.Vector2dc,org.joml.Matrix2d)"(arg0: Internal.Vector2dc_, arg1: Internal.Matrix2d_): this;
        identity(): this;
        "set(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        "get(int,int)"(arg0: number, arg1: number): number;
        equals(arg0: any): boolean;
        "scale(double,double)"(arg0: number, arg1: number): this;
        invert(): this;
        set "(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_)
        set "(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_)
        set fromAddress(arg0: number)
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set "(double[])"(arg0: number[])
        get class(): typeof any
        set "(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_)
        set "(org.joml.Matrix3x2dc)"(arg0: Internal.Matrix3x2dc_)
        get finite(): boolean
        get rotation(): number
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        set "(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_)
        set "(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_)
        m01: number;
        m10: number;
        m00: number;
        m11: number;
    }
    type Matrix2d_ = Matrix2d;
    interface HeadedModel {
        abstract getHead(): Internal.ModelPart;
        get head(): Internal.ModelPart
        (): Internal.ModelPart_;
    }
    type HeadedModel_ = HeadedModel | (()=> Internal.ModelPart_);
    class Rectangle2D$Double extends Internal.Rectangle2D implements Internal.Serializable {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        contains(arg0: number, arg1: number): boolean;
        getBounds(): Internal.Rectangle;
        getMaxY(): number;
        intersects(arg0: Internal.Rectangle2D_): boolean;
        getCenterY(): number;
        notify(): void;
        contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getPathIterator(arg0: Internal.AffineTransform_, arg1: number): Internal.PathIterator;
        createIntersection(arg0: Internal.Rectangle2D_): Internal.Rectangle2D;
        contains(arg0: Internal.Rectangle2D_): boolean;
        getMinX(): number;
        "contains(java.awt.geom.Point2D)"(arg0: Internal.Point2D_): boolean;
        getPathIterator(arg0: Internal.AffineTransform_): Internal.PathIterator;
        setFrameFromDiagonal(arg0: number, arg1: number, arg2: number, arg3: number): void;
        outcode(arg0: Internal.Point2D_): number;
        contains(arg0: Internal.Point2D_): boolean;
        getX(): number;
        "contains(java.awt.geom.Rectangle2D)"(arg0: Internal.Rectangle2D_): boolean;
        setFrame(arg0: Internal.Point2D_, arg1: Internal.Dimension2D_): void;
        wait(): void;
        static union(arg0: Internal.Rectangle2D_, arg1: Internal.Rectangle2D_, arg2: Internal.Rectangle2D_): void;
        clone(): any;
        getClass(): typeof any;
        outcode(arg0: number, arg1: number): number;
        "add(java.awt.geom.Point2D)"(arg0: Internal.Point2D_): void;
        static intersect(arg0: Internal.Rectangle2D_, arg1: Internal.Rectangle2D_, arg2: Internal.Rectangle2D_): void;
        getMaxX(): number;
        createUnion(arg0: Internal.Rectangle2D_): Internal.Rectangle2D;
        isEmpty(): boolean;
        add(arg0: number, arg1: number): void;
        intersectsLine(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getCenterX(): number;
        wait(arg0: number, arg1: number): void;
        intersectsLine(arg0: Internal.Line2D_): boolean;
        setFrameFromCenter(arg0: number, arg1: number, arg2: number, arg3: number): void;
        getWidth(): number;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        setFrame(arg0: Internal.Rectangle2D_): void;
        setRect(arg0: Internal.Rectangle2D_): void;
        getBounds2D(): Internal.Rectangle2D;
        getHeight(): number;
        getMinY(): number;
        toString(): string;
        add(arg0: Internal.Point2D_): void;
        setFrameFromCenter(arg0: Internal.Point2D_, arg1: Internal.Point2D_): void;
        notifyAll(): void;
        setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;
        "add(java.awt.geom.Rectangle2D)"(arg0: Internal.Rectangle2D_): void;
        setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
        add(arg0: Internal.Rectangle2D_): void;
        getY(): number;
        hashCode(): number;
        getFrame(): Internal.Rectangle2D;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        setFrameFromDiagonal(arg0: Internal.Point2D_, arg1: Internal.Point2D_): void;
        get bounds(): Internal.Rectangle
        get maxY(): number
        get centerY(): number
        get minX(): number
        get x(): number
        get class(): typeof any
        get maxX(): number
        get empty(): boolean
        get centerX(): number
        get width(): number
        set frame(arg0: Internal.Rectangle2D_)
        set rect(arg0: Internal.Rectangle2D_)
        get bounds2D(): Internal.Rectangle2D
        get height(): number
        get minY(): number
        get y(): number
        get frame(): Internal.Rectangle2D
        width: number;
        height: number;
        x: number;
        y: number;
    }
    type Rectangle2D$Double_ = Rectangle2D$Double;
    abstract class ImmutableCollection$Builder <E> {
        getClass(): typeof any;
        toString(): string;
        "addAll(java.util.Iterator)"(arg0: Internal.Iterator_<E>): this;
        abstract build(): Internal.ImmutableCollection<E>;
        notifyAll(): void;
        addAll(arg0: Internal.Iterable_<E>): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "addAll(java.lang.Iterable)"(arg0: Internal.Iterable_<E>): this;
        addAll(arg0: Internal.Iterator_<E>): this;
        hashCode(): number;
        abstract "add(java.lang.Object)"(arg0: E): this;
        "add(java.lang.Object[])"(...arg0: E[]): this;
        wait(): void;
        wait(arg0: number): void;
        add(...arg0: E[]): this;
        equals(arg0: any): boolean;
        abstract add(arg0: E): this;
        get class(): typeof any
    }
    type ImmutableCollection$Builder_<E> = ImmutableCollection$Builder<E>;
    class SpruceFoliagePlacer extends Internal.FoliagePlacer {
        constructor(arg0: Internal.IntProvider_, arg1: Internal.IntProvider_, arg2: Internal.IntProvider_)
        getClass(): typeof any;
        hashCode(): number;
        createFoliage(arg0: Internal.LevelSimulatedReader_, arg1: Internal.FoliagePlacer$FoliageSetter_, arg2: Internal.RandomSource_, arg3: Internal.TreeConfiguration_, arg4: number, arg5: Internal.FoliagePlacer$FoliageAttachment_, arg6: number, arg7: number): void;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        foliageHeight(arg0: Internal.RandomSource_, arg1: number, arg2: Internal.TreeConfiguration_): number;
        equals(arg0: any): boolean;
        notify(): void;
        foliageRadius(arg0: Internal.RandomSource_, arg1: number): number;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.SpruceFoliagePlacer>;
    }
    type SpruceFoliagePlacer_ = SpruceFoliagePlacer;
    class SuspiciousStewItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): Internal.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        static saveMobEffect(arg0: Internal.ItemStack_, arg1: Internal.MobEffect_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        handler$zcm000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        static readonly EFFECTS_TAG: ("Effects") & (string);
        static readonly EFFECT_DURATION_TAG: ("EffectDuration") & (string);
        static readonly DEFAULT_DURATION: (160) & (number);
        static readonly EFFECT_ID_TAG: ("EffectId") & (string);
    }
    type SuspiciousStewItem_ = SuspiciousStewItem;
    interface GameMasterBlock {
    }
    type GameMasterBlock_ = GameMasterBlock;
    abstract class BlockableEventLoop <R extends Internal.Runnable> implements Internal.ProfilerMeasured, Internal.Executor, Internal.ProcessorHandle<R> {
        executeIfPossible(arg0: Internal.Runnable_): void;
        getClass(): typeof any;
        "tell(java.lang.Runnable)"(arg0: R): void;
        pollTask(): boolean;
        submit<V>(arg0: Internal.Supplier_<V>): Internal.CompletableFuture<V>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "submit(java.util.function.Supplier)"<V>(arg0: Internal.Supplier_<V>): Internal.CompletableFuture<V>;
        submit(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        static of<Msg>(arg0: string, arg1: Internal.Consumer_<Msg>): Internal.ProcessorHandle<Msg>;
        "tell(java.lang.Object)"(arg0: any): void;
        "submit(java.lang.Runnable)"(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        tell(arg0: R): void;
        tell(arg0: any): void;
        toString(): string;
        executeBlocking(arg0: Internal.Runnable_): void;
        notifyAll(): void;
        getPendingTasksCount(): number;
        profiledMetrics(): Internal.List<Internal.MetricSampler>;
        ask<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Source>, R>): Internal.CompletableFuture<Source>;
        name(): string;
        askEither<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Internal.Either<Source, Internal.Exception>>, R>): Internal.CompletableFuture<Source>;
        hashCode(): number;
        wait(): void;
        close(): void;
        wait(arg0: number): void;
        execute(arg0: Internal.Runnable_): void;
        submitAsync(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        isSameThread(): boolean;
        managedBlock(arg0: Internal.BooleanSupplier_): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get pendingTasksCount(): number
        get sameThread(): boolean
    }
    type BlockableEventLoop_<R extends Internal.Runnable> = BlockableEventLoop<R>;
    class ItemComponents$2 implements Internal.RecipeComponentWithParent<InputItem[]> {
        getClass(): typeof any;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, InputItem[]>>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<InputItem[]>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<InputItem[]>;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<InputItem[]>;
        replaceOutput(recipe: Internal.RecipeJS_, original: InputItem_[], match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): InputItem[];
        role(): Internal.ComponentRole;
        notify(): void;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, InputItem[]>>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<InputItem[]>;
        checkEmpty(key: Internal.RecipeKey_<InputItem[]>, value: InputItem_[]): string;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem[]>, json: Internal.JsonObject_): void;
        key(name: string): Internal.RecipeKey<InputItem[]>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        orSelf(): Internal.RecipeComponent<InputItem[]>;
        componentType(): string;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<InputItem[]>;
        asArray(): Internal.ArrayRecipeComponent<InputItem[]>;
        static builder(): Internal.RecipeComponentBuilder;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<InputItem[], O>;
        notifyAll(): void;
        write(recipe: Internal.RecipeJS_, value: InputItem_[]): Internal.JsonElement;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem[]>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem[]>, map: Internal.Map_<any, any>): void;
        hashCode(): number;
        checkValueHasChanged(oldValue: InputItem_[], newValue: InputItem_[]): boolean;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,dev.latvian.mods.kubejs.item.InputItem[])"(recipe: Internal.RecipeJS_, value: InputItem_[]): Internal.JsonElement;
        isInput(recipe: Internal.RecipeJS_, value: InputItem_[], match: Internal.ReplacementMatch_): boolean;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<InputItem[], O>;
        wait(): void;
        parentComponent(): Internal.RecipeComponent<InputItem[]>;
        wait(arg0: number): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        isOutput(recipe: Internal.RecipeJS_, value: InputItem_[], match: Internal.ReplacementMatch_): boolean;
        read(recipe: Internal.RecipeJS_, from: any): InputItem[];
        equals(arg0: any): boolean;
        replaceInput(recipe: Internal.RecipeJS_, original: InputItem_[], match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): InputItem[];
        get class(): typeof any
    }
    type ItemComponents$2_ = ItemComponents$2;
    class Attributes implements Internal.Cloneable, Internal.Map<any, any> {
        constructor()
        constructor(arg0: Internal.Attributes_)
        constructor(arg0: number)
        containsValue(arg0: any): boolean;
        putAll(arg0: Internal.Map_<any, any>): void;
        notify(): void;
        keySet(): Internal.Set<any>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        replace(arg0: any, arg1: any, arg2: any): boolean;
        put(arg0: any, arg1: any): any;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        values(): Internal.Collection<any>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        computeIfAbsent(arg0: any, arg1: Internal.Function_<any, any>): any;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        forEach(arg0: Internal.BiConsumer_<any, any>): void;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        wait(): void;
        getValue(arg0: Internal.Attributes$Name_): string;
        remove(arg0: any): any;
        compute(arg0: any, arg1: Internal.BiFunction_<any, any, any>): any;
        getValue(arg0: string): string;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        putIfAbsent(arg0: any, arg1: any): any;
        clone(): any;
        getClass(): typeof any;
        static of<K, V>(): Internal.Map<K, V>;
        getOrDefault(arg0: any, arg1: any): any;
        "getValue(java.lang.String)"(arg0: string): string;
        isEmpty(): boolean;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        putValue(arg0: string, arg1: string): string;
        wait(arg0: number, arg1: number): void;
        containsKey(arg0: any): boolean;
        replaceAll(arg0: Internal.BiFunction_<any, any, any>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        "getValue(java.util.jar.Attributes$Name)"(arg0: Internal.Attributes$Name_): string;
        toString(): string;
        notifyAll(): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        hashCode(): number;
        size(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        entrySet(): Internal.Set<Internal.Map$Entry<any, any>>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        wait(arg0: number): void;
        replace(arg0: any, arg1: any): any;
        merge(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        equals(arg0: any): boolean;
        get(arg0: any): any;
        computeIfPresent(arg0: any, arg1: Internal.BiFunction_<any, any, any>): any;
        get class(): typeof any
        get empty(): boolean
    }
    type Attributes_ = Attributes;
    class ItemComponents$1 implements Internal.RecipeComponent<InputItem> {
        getClass(): typeof any;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,dev.latvian.mods.kubejs.item.InputItem)"(key: Internal.RecipeKey_<InputItem>, value: InputItem_): string;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<InputItem>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<InputItem>;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<InputItem, O>;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<InputItem>;
        role(): Internal.ComponentRole;
        notify(): void;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<InputItem>;
        checkValueHasChanged(oldValue: InputItem_, newValue: InputItem_): boolean;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<InputItem, O>;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,dev.latvian.mods.kubejs.item.InputItem)"(recipe: Internal.RecipeJS_, value: InputItem_): Internal.JsonElement;
        isInput(recipe: Internal.RecipeJS_, value: InputItem_, match: Internal.ReplacementMatch_): boolean;
        key(name: string): Internal.RecipeKey<InputItem>;
        isOutput(recipe: Internal.RecipeJS_, value: InputItem_, match: Internal.ReplacementMatch_): boolean;
        read(recipe: Internal.RecipeJS_, from: any): InputItem;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<InputItem>;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem>, map: Internal.Map_<any, any>): void;
        orSelf(): Internal.RecipeComponent<InputItem>;
        replaceOutput(recipe: Internal.RecipeJS_, original: InputItem_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): InputItem;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, InputItem>>;
        checkEmpty(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        asArray(): Internal.ArrayRecipeComponent<InputItem>;
        static builder(): Internal.RecipeComponentBuilder;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem>, json: Internal.JsonObject_): void;
        checkEmpty(key: Internal.RecipeKey_<InputItem>, value: InputItem_): string;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        notifyAll(): void;
        write(recipe: Internal.RecipeJS_, value: InputItem_): Internal.JsonElement;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        replaceInput(recipe: Internal.RecipeJS_, original: InputItem_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): InputItem;
        "isInput(dev.latvian.mods.kubejs.recipe.RecipeJS,dev.latvian.mods.kubejs.item.InputItem,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(recipe: Internal.RecipeJS_, value: InputItem_, match: Internal.ReplacementMatch_): boolean;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,java.lang.Object)"(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, InputItem>>;
        hashCode(): number;
        "isInput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        wait(): void;
        wait(arg0: number): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        isInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type ItemComponents$1_ = ItemComponents$1;
    interface RecipeFilter extends Internal.Predicate<Internal.RecipeKJS> {
        test(arg0: any): boolean;
        negate(): Internal.Predicate<Internal.RecipeKJS>;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        "test(java.lang.Object)"(arg0: any): boolean;
        or(arg0: Internal.Predicate_<Internal.RecipeKJS>): Internal.Predicate<Internal.RecipeKJS>;
        and(arg0: Internal.Predicate_<Internal.RecipeKJS>): Internal.Predicate<Internal.RecipeKJS>;
        abstract test(arg0: Internal.RecipeKJS_): boolean;
        of(cx: Internal.Context_, o: any): this;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        abstract "test(dev.latvian.mods.kubejs.core.RecipeKJS)"(arg0: Internal.RecipeKJS_): boolean;
        readonly PARSE: dev.architectury.event.Event<Internal.RecipeFilterParseEvent>;
    }
    type RecipeFilter_ = RegExp | RecipeFilter | "-" | Internal.RecipeFilter_[] | {exact?: boolean, output?: Internal.Ingredient_, id?: Special.RecipeId|RegExp, input?: Internal.Ingredient_, type?: Special.RecipeSerializer, mod?: Special.Mod, not?: Internal.RecipeFilter_, or?: Internal.RecipeFilter_[], group?: string} | "*" | {output?: Internal.ReplacementMatch_, id?: Special.RecipeId, input?: Internal.ReplacementMatch_, type?: Special.RecipeSerializer, mod?: Special.Mod, not?: Internal.RecipeFilter_, or?: Internal.RecipeFilter_, group?: string};
    class ItemComponents$4 implements Internal.RecipeComponentWithParent<OutputItem> {
        read(recipe: Internal.RecipeJS_, from: any): OutputItem;
        getClass(): typeof any;
        parentComponent(): Internal.RecipeComponent<OutputItem>;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<OutputItem, O>;
        checkValueHasChanged(oldValue: OutputItem_, newValue: OutputItem_): boolean;
        isOutput(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        checkEmpty(key: Internal.RecipeKey_<OutputItem>, value: OutputItem_): string;
        role(): Internal.ComponentRole;
        notify(): void;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<OutputItem>;
        replaceInput(recipe: Internal.RecipeJS_, original: OutputItem_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): OutputItem;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, OutputItem>>;
        replaceOutput(recipe: Internal.RecipeJS_, original: OutputItem_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): OutputItem;
        static builder(): Internal.RecipeComponentBuilder;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<OutputItem>;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        notifyAll(): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<OutputItem>;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<OutputItem, O>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, OutputItem>>;
        write(recipe: Internal.RecipeJS_, value: OutputItem_): Internal.JsonElement;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, json: Internal.JsonObject_): void;
        hashCode(): number;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, map: Internal.Map_<any, any>): void;
        asArray(): Internal.ArrayRecipeComponent<OutputItem>;
        wait(): void;
        wait(arg0: number): void;
        isInput(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<OutputItem>;
        key(name: string): Internal.RecipeKey<OutputItem>;
        equals(arg0: any): boolean;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<OutputItem>;
        orSelf(): Internal.RecipeComponent<OutputItem>;
        get class(): typeof any
    }
    type ItemComponents$4_ = ItemComponents$4;
    class ItemComponents$3 implements Internal.RecipeComponent<OutputItem> {
        read(recipe: Internal.RecipeJS_, from: any): OutputItem;
        getClass(): typeof any;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,dev.latvian.mods.kubejs.item.OutputItem)"(key: Internal.RecipeKey_<OutputItem>, value: OutputItem_): string;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<OutputItem, O>;
        checkValueHasChanged(oldValue: OutputItem_, newValue: OutputItem_): boolean;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        isOutput(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        checkEmpty(key: Internal.RecipeKey_<OutputItem>, value: OutputItem_): string;
        role(): Internal.ComponentRole;
        notify(): void;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<OutputItem>;
        replaceInput(recipe: Internal.RecipeJS_, original: OutputItem_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): OutputItem;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, OutputItem>>;
        checkEmpty(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        "isOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,dev.latvian.mods.kubejs.item.OutputItem,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        replaceOutput(recipe: Internal.RecipeJS_, original: OutputItem_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): OutputItem;
        static builder(): Internal.RecipeComponentBuilder;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<OutputItem>;
        "isOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        notifyAll(): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<OutputItem>;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<OutputItem, O>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, OutputItem>>;
        write(recipe: Internal.RecipeJS_, value: OutputItem_): Internal.JsonElement;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,dev.latvian.mods.kubejs.item.OutputItem)"(recipe: Internal.RecipeJS_, value: OutputItem_): Internal.JsonElement;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, json: Internal.JsonObject_): void;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,java.lang.Object)"(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        isOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        hashCode(): number;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, map: Internal.Map_<any, any>): void;
        asArray(): Internal.ArrayRecipeComponent<OutputItem>;
        wait(): void;
        wait(arg0: number): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        isInput(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<OutputItem>;
        key(name: string): Internal.RecipeKey<OutputItem>;
        equals(arg0: any): boolean;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<OutputItem>;
        orSelf(): Internal.RecipeComponent<OutputItem>;
        get class(): typeof any
    }
    type ItemComponents$3_ = ItemComponents$3;
    class EnderMan extends Internal.Monster implements Internal.NeutralMob {
        constructor(arg0: Internal.EntityType_<Internal.EnderMan>, arg1: Internal.Level_)
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        isOnFire(): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        setXxa(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        setMotionZ(z: number): void;
        getMagicData(): Internal.MagicData;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        addPersistentAngerSaveData(arg0: Internal.CompoundTag_): void;
        isSpectator(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        getHasUsedSingleAttack(): boolean;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): Internal.Component;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): Internal.LivingEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        onlyOpCanSetNbt(): boolean;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        isCreepy(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: Internal.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        getLeashOffset(): Vec3d;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        handler$zcl000$setTicksFrozen(arg0: number, arg1: Internal.CallbackInfo_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getLeashHolder(): Internal.Entity;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        getArrowCount(): number;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setHasUsedSingleAttack(hasUsedSingleAttack: boolean): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        getFirstTick(): boolean;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isDrinkingPotion(): boolean;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getSoundSource(): Internal.SoundSource;
        getLastDamageSource(): DamageSource;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        getRemainingPersistentAngerTime(): number;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        static checkMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.ServerLevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        isCasting(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        handler$zco000$handleEquipmentChanges(arg0: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        abstract "getItemBySlot(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getMotionDirection(): Internal.Direction;
        canBeCollidedWith(): boolean;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getAttributes(): Internal.AttributeMap;
        initiateCastSpell(spell: Internal.AbstractSpell_, spellLevel: number): void;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        castComplete(): void;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        abstract getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isInvisibleTo(arg0: Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getStepHeight(): number;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        static createMonsterAttributes(): Internal.AttributeSupplier$Builder;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setSilent(arg0: boolean): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getForgePersistentData(): Internal.CompoundTag;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        maxUpStep(): number;
        handler$zco000$isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getTags(): Internal.Set<string>;
        getViewVector(arg0: number): Vec3d;
        readPersistentAngerSaveData(arg0: Internal.Level_, arg1: Internal.CompoundTag_): void;
        setSyncedSpellData(syncedSpellData: Internal.SyncedSpellData_): void;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        hasGlowingTag(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        abstract setLastHurtByPlayer(arg0: Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        isAngry(): boolean;
        setRotation(yaw: number, pitch: number): void;
        handler$zzf000$init(entityType: Internal.EntityType_<any>, level: Internal.Level_, ci: Internal.CallbackInfo_): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getJumpControl(): Internal.JumpControl;
        cancelCast(): void;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        handler$zcl000$isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        isAngryAt(arg0: Internal.LivingEntity_): boolean;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        tell(message: Internal.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        updatePersistentAnger(arg0: Internal.ServerLevel_, arg1: boolean): void;
        handler$zco000$getArmorCoverPercentage(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isFullyFrozen(): boolean;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Player_): boolean;
        self(): Internal.PathfinderMob;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        clearRestriction(): void;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        spawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        setBaby(arg0: boolean): void;
        abstract getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        setCarriedBlock(arg0: Internal.BlockState_): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getBlockX(): number;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        setRemainingPersistentAngerTime(arg0: number): void;
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        handler$zcl000$isInvisibleTo(arg0: Player_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getEyeY(): number;
        skipDropExperience(): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        isAffectedByPotions(): boolean;
        addTag(arg0: string): boolean;
        playerTouch(arg0: Player_): void;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        isWithinRestriction(arg0: BlockPos_): boolean;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        getTeam(): Internal.Team;
        "self()"(): Internal.PathfinderMob;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        isVehicle(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isAngryAtAllPlayers(arg0: Internal.Level_): boolean;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        playerDied(arg0: Player_): void;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        setTeleportLocationBehindTarget(distance: number): boolean;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        isRemoved(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        playStareSound(): void;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        handler$zbn000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        abstract setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getLookAngle(): Vec3d;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        isPreventingPlayerRest(arg0: Player_): boolean;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        abstract canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        hasBeenStaredAt(): boolean;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        abstract getTarget(): Internal.LivingEntity;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        isInWater(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        /**
         * @deprecated
        */
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        m_8024_(): void;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        startPersistentAngerTimer(): void;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        setBeingStaredAt(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        setBurningDashDirectionData(): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        deserializeNBT(arg0: Internal.Tag_): void;
        revive(): void;
        getBbWidth(): number;
        static checkAnyLightMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): Internal.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        handler$zdd000$changeGlowOutline(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        stopBeingAngry(): void;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        setDrinkingPotion(drinkingPotion: boolean): void;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getCarriedBlock(): Internal.BlockState;
        getRandomY(): number;
        getDisplayName(): Internal.Component;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        startDrinkingPotion(): void;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        getPersistentAngerTarget(): Internal.UUID;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        notifyDangerousProjectile(projectile: Internal.Projectile_): void;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getType(): string;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        static isDarkEnoughToSpawn(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_): boolean;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        handler$zco000$updateInvisibilityStatus(arg0: Internal.CallbackInfo_): void;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        setPersistentAngerTarget(arg0: Internal.UUID_): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "swing(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get magicData(): Internal.MagicData
        get blockY(): number
        get spectator(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set aggressive(arg0: boolean)
        get hasUsedSingleAttack(): boolean
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): Internal.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get ticksFrozen(): number
        get creepy(): boolean
        get voicePitch(): number
        set statusMessage(message: Internal.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get underWater(): boolean
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set hasUsedSingleAttack(hasUsedSingleAttack: boolean)
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get drinkingPotion(): boolean
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get soundSource(): Internal.SoundSource
        get lastDamageSource(): DamageSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get remainingPersistentAngerTime(): number
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get blocking(): boolean
        get casting(): boolean
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get portalWaitTime(): number
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        set syncedSpellData(syncedSpellData: Internal.SyncedSpellData_)
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Player_)
        get "server()"(): Internal.MinecraftServer
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        get angry(): boolean
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get fullyFrozen(): boolean
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set carriedBlock(arg0: Internal.BlockState_)
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        get blockX(): number
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get fallFlying(): boolean
        get encodeId(): string
        set remainingPersistentAngerTime(arg0: number)
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        set teleportLocationBehindTarget(distance: number)
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get offHandItem(): Internal.ItemStack
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): Internal.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        get target(): Internal.LivingEntity
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get speed(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get headArmorItem(): Internal.ItemStack
        get bbWidth(): number
        get "name()"(): Internal.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get username(): string
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        set drinkingPotion(drinkingPotion: boolean)
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get carriedBlock(): Internal.BlockState
        get randomY(): number
        get displayName(): Internal.Component
        get mobType(): Internal.MobType
        get persistentAngerTarget(): Internal.UUID
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set persistentAngerTarget(arg0: Internal.UUID_)
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
    }
    type EnderMan_ = EnderMan;
    class ClientboundTeleportEntityPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Entity_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getxRot(): number;
        toString(): string;
        notifyAll(): void;
        getyRot(): number;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        getX(): number;
        getY(): number;
        getZ(): number;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        isOnGround(): boolean;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        getId(): number;
        get class(): typeof any
        get xRot(): number
        get yRot(): number
        get skippable(): boolean
        get x(): number
        get y(): number
        get z(): number
        get onGround(): boolean
        get id(): number
    }
    type ClientboundTeleportEntityPacket_ = ClientboundTeleportEntityPacket;
    interface NonNullFunction <T, R> {
        abstract apply(arg0: T): R;
        (arg0: T): R;
    }
    type NonNullFunction_<T, R> = ((arg0: T)=> R) | NonNullFunction<T, R>;
    interface ModelPart$Visitor {
        abstract visit(arg0: Internal.PoseStack$Pose_, arg1: string, arg2: number, arg3: Internal.ModelPart$Cube_): void;
        (arg0: Internal.PoseStack$Pose, arg1: string, arg2: number, arg3: Internal.ModelPart$Cube): void;
    }
    type ModelPart$Visitor_ = ((arg0: Internal.PoseStack$Pose, arg1: string, arg2: number, arg3: Internal.ModelPart$Cube)=> void) | ModelPart$Visitor;
    interface IForgeRegistry$CreateCallback <V> {
        abstract onCreate(arg0: Internal.IForgeRegistryInternal_<V>, arg1: Internal.RegistryManager_): void;
        (arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager): void;
    }
    type IForgeRegistry$CreateCallback_<V> = ((arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager)=> void) | IForgeRegistry$CreateCallback<V>;
    class RecipeIngredientRole extends Internal.Enum<Internal.RecipeIngredientRole> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        "compareTo(mezz.jei.api.recipe.RecipeIngredientRole)"(arg0: Internal.RecipeIngredientRole_): number;
        static values(): Internal.RecipeIngredientRole[];
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static valueOf(arg0: string): Internal.RecipeIngredientRole;
        name(): string;
        compareTo(arg0: Internal.RecipeIngredientRole_): number;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.RecipeIngredientRole;
        ordinal(): number;
        wait(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.RecipeIngredientRole>>;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.RecipeIngredientRole
        static readonly CATALYST: (Internal.RecipeIngredientRole) & (Internal.RecipeIngredientRole);
        static readonly OUTPUT: (Internal.RecipeIngredientRole) & (Internal.RecipeIngredientRole);
        static readonly RENDER_ONLY: (Internal.RecipeIngredientRole) & (Internal.RecipeIngredientRole);
        static readonly INPUT: (Internal.RecipeIngredientRole) & (Internal.RecipeIngredientRole);
    }
    type RecipeIngredientRole_ = "output" | "input" | "catalyst" | RecipeIngredientRole | "render_only";
    class CartographyTableMenu extends Internal.AbstractContainerMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: any_)
        constructor(arg0: number, arg1: Internal.Inventory_)
        findSlot(arg0: Internal.Container_, arg1: number): Internal.OptionalInt;
        getItems(): Internal.NonNullList<Internal.ItemStack>;
        quickMoveStack(arg0: Player_, arg1: number): Internal.ItemStack;
        setRemoteCarried(arg0: Internal.ItemStack_): void;
        broadcastFullState(): void;
        notify(): void;
        incrementStateId(): number;
        isValidSlotIndex(arg0: number): boolean;
        broadcastChanges(): void;
        setData(arg0: number, arg1: number): void;
        getSlot(arg0: number): Internal.Slot;
        slotsChanged(arg0: Internal.Container_): void;
        removeSlotListener(arg0: Internal.ContainerListener_): void;
        setRemoteSlot(arg0: number, arg1: Internal.ItemStack_): void;
        getCarried(): Internal.ItemStack;
        wait(): void;
        getType(): Internal.MenuType<any>;
        setSynchronizer(arg0: Internal.ContainerSynchronizer_): void;
        static isValidQuickcraftType(arg0: number, arg1: Player_): boolean;
        getClass(): typeof any;
        static getRedstoneSignalFromBlockEntity(arg0: Internal.BlockEntity_): number;
        canTakeItemForPickAll(arg0: Internal.ItemStack_, arg1: Internal.Slot_): boolean;
        setItem(arg0: number, arg1: number, arg2: Internal.ItemStack_): void;
        static getRedstoneSignalFromContainer(arg0: Internal.Container_): number;
        sendAllDataToRemote(): void;
        setCarried(arg0: Internal.ItemStack_): void;
        static getQuickCraftPlaceCount(arg0: Internal.Set_<Internal.Slot>, arg1: number, arg2: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        resumeRemoteUpdates(): void;
        static getQuickcraftHeader(arg0: number): number;
        static canItemQuickReplace(arg0: Internal.Slot_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        addSlotListener(arg0: Internal.ContainerListener_): void;
        toString(): string;
        clickMenuButton(arg0: Player_, arg1: number): boolean;
        static getQuickcraftMask(arg0: number, arg1: number): number;
        notifyAll(): void;
        static getQuickcraftType(arg0: number): number;
        setRemoteSlotNoCopy(arg0: number, arg1: Internal.ItemStack_): void;
        clicked(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Player_): void;
        stillValid(arg0: Player_): boolean;
        suppressRemoteUpdates(): void;
        hashCode(): number;
        initializeContents(arg0: number, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.ItemStack_): void;
        getStateId(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        transferState(arg0: Internal.AbstractContainerMenu_): void;
        canDragTo(arg0: Internal.Slot_): boolean;
        removed(arg0: Player_): void;
        get items(): Internal.NonNullList<Internal.ItemStack>
        set remoteCarried(arg0: Internal.ItemStack_)
        get carried(): Internal.ItemStack
        get type(): Internal.MenuType<any>
        set synchronizer(arg0: Internal.ContainerSynchronizer_)
        get class(): typeof any
        set carried(arg0: Internal.ItemStack_)
        get stateId(): number
        static readonly RESULT_SLOT: (2) & (number);
        static readonly MAP_SLOT: (0) & (number);
        readonly container: Internal.Container;
        static readonly ADDITIONAL_SLOT: (1) & (number);
    }
    type CartographyTableMenu_ = CartographyTableMenu;
    interface ProcessorHandle <Msg> extends Internal.AutoCloseable {
        abstract name(): string;
        abstract tell(arg0: Msg): void;
        of<Msg>(arg0: string, arg1: Internal.Consumer_<Msg>): this;
        close(): void;
        ask<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Source>, Msg>): Internal.CompletableFuture<Source>;
        askEither<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Internal.Either<Source, Internal.Exception>>, Msg>): Internal.CompletableFuture<Source>;
    }
    type ProcessorHandle_<Msg> = ProcessorHandle<Msg>;
    class DyeItem extends Internal.Item implements Internal.SignApplicator {
        constructor(arg0: Internal.DyeColor_, arg1: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        getDyeColor(): Internal.DyeColor;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): Internal.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        tryApplyToSign(arg0: Internal.Level_, arg1: Internal.SignBlockEntity_, arg2: boolean, arg3: Player_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        canApplyToSign(arg0: Internal.SignText_, arg1: Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        static byColor(arg0: Internal.DyeColor_): Internal.DyeItem;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        handler$zcm000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        get dyeColor(): Internal.DyeColor
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type DyeItem_ = DyeItem;
    class Matrix3d implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix3dc {
        constructor()
        constructor(arg0: Internal.Matrix3fc_)
        constructor(arg0: Internal.Matrix2fc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_)
        constructor(arg0: Internal.Matrix4dc_)
        constructor(arg0: Internal.Matrix3dc_)
        constructor(arg0: Internal.Matrix4fc_)
        constructor(arg0: Internal.Matrix2dc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)
        "transform(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        mapXZnY(arg0: Internal.Matrix3d_): this;
        reflect(arg0: Internal.Quaterniondc_): this;
        rotationX(arg0: number): this;
        mapnZXY(arg0: Internal.Matrix3d_): this;
        mapnYXnZ(arg0: Internal.Matrix3d_): this;
        setFloats(arg0: number, arg1: Internal.ByteBuffer_): this;
        mapnZnXY(): this;
        mapZXnY(): this;
        rotationYXZ(arg0: number, arg1: number, arg2: number): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        setLookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mul(arg0: Internal.Matrix3fc_, arg1: Internal.Matrix3d_): this;
        "quadraticFormProduct(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): number;
        getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        lerp(arg0: Internal.Matrix3dc_, arg1: number, arg2: Internal.Matrix3d_): this;
        quadraticFormProduct(arg0: Internal.Vector3dc_): number;
        rotation(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "set(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        set(arg0: Internal.Matrix4fc_): this;
        set(arg0: number, arg1: number, arg2: number): this;
        mapnZYnX(): this;
        "mul(org.joml.Matrix3dc,org.joml.Matrix3d)"(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        "get(double[])"(arg0: number[]): number[];
        scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapYZnX(): this;
        transform(arg0: Internal.Vector3d_): Internal.Vector3d;
        scaleLocal(arg0: number, arg1: number, arg2: number): this;
        mapnYnZnX(): this;
        normal(arg0: Internal.Matrix3d_): this;
        "reflection(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        set(arg0: Internal.Matrix3fc_): this;
        obliqueZ(arg0: number, arg1: number): this;
        rotationY(arg0: number): this;
        equals(arg0: Internal.Matrix3dc_, arg1: number): boolean;
        "scale(double)"(arg0: number): this;
        mapYXnZ(arg0: Internal.Matrix3d_): this;
        mapYnZnX(): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        scale(arg0: Internal.Vector3dc_, arg1: Internal.Matrix3d_): this;
        mapZnYX(): this;
        mapYnXnZ(arg0: Internal.Matrix3d_): this;
        rotationZYX(arg0: number, arg1: number, arg2: number): this;
        "reflect(org.joml.Quaterniondc,org.joml.Matrix3d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        rotate(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix3d_): this;
        set(arg0: Internal.Matrix2dc_): this;
        mapZXY(arg0: Internal.Matrix3d_): this;
        mapnYnXnZ(arg0: Internal.Matrix3d_): this;
        "set(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_): this;
        "mul(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        setTransposed(arg0: Internal.Matrix3fc_): this;
        set(arg0: Internal.Matrix4x3dc_): this;
        obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix3d_): this;
        get(arg0: Internal.Matrix3d_): this;
        transform(arg0: Vec3f_): Vec3f;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix3d_): this;
        "get(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): this;
        wait(arg0: number): void;
        "rotateLocal(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        mapZYnX(): this;
        set(arg0: Internal.FloatBuffer_): this;
        "rotateLocal(org.joml.Quaternionfc,org.joml.Matrix3d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix3d_): this;
        rotationZ(arg0: number): this;
        transformTranspose(arg0: Internal.Vector3d_): Internal.Vector3d;
        "rotate(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        "scaling(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        mul(arg0: Internal.Matrix3dc_): this;
        quadraticFormProduct(arg0: Internal.Vector3fc_): number;
        isFinite(): boolean;
        mapYXZ(arg0: Internal.Matrix3d_): this;
        "rotate(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        rotation(arg0: Internal.Quaternionfc_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix3d_): this;
        reflect(arg0: number, arg1: number, arg2: number): this;
        setSkewSymmetric(arg0: number, arg1: number, arg2: number): this;
        "set(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): this;
        set(arg0: Internal.Matrix4dc_): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "setTransposed(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        mapYnXZ(): this;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        setFloats(arg0: Internal.ByteBuffer_): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): this;
        reflection(arg0: number, arg1: number, arg2: number): this;
        set(arg0: Internal.Matrix3dc_): this;
        mapYnZX(arg0: Internal.Matrix3d_): this;
        transform(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        get(arg0: number[], arg1: number): number[];
        mapnYnXZ(arg0: Internal.Matrix3d_): this;
        "scale(org.joml.Vector3dc,org.joml.Matrix3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix3d_): this;
        m02(): number;
        mapZnYX(arg0: Internal.Matrix3d_): this;
        mapnZXnY(): this;
        quadraticFormProduct(arg0: number, arg1: number, arg2: number): number;
        mapYXnZ(): this;
        rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix3d_): this;
        setTransposed(arg0: Internal.Matrix3dc_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        "rotate(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        getToAddress(arg0: number): Internal.Matrix3dc;
        equals(arg0: any): boolean;
        mapZYX(arg0: Internal.Matrix3d_): this;
        mapnYnZX(arg0: Internal.Matrix3d_): this;
        scale(arg0: number, arg1: Internal.Matrix3d_): this;
        "set(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        rotateLocalZ(arg0: number, arg1: Internal.Matrix3d_): this;
        mapXZY(): this;
        "mul(org.joml.Matrix3fc,org.joml.Matrix3d)"(arg0: Internal.Matrix3fc_, arg1: Internal.Matrix3d_): this;
        mapnZXY(): this;
        "set(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        m10(arg0: number): this;
        mapXZnY(): this;
        rotation(arg0: Internal.Quaterniondc_): this;
        lerp(arg0: Internal.Matrix3dc_, arg1: number): this;
        mul(arg0: Internal.Matrix3fc_): this;
        negateY(): this;
        mapnXZY(): this;
        setFromAddress(arg0: number): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        rotate(arg0: Internal.Quaternionfc_): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3d_): this;
        mapYZnX(arg0: Internal.Matrix3d_): this;
        setRow(arg0: number, arg1: number, arg2: number, arg3: number): this;
        normal(): this;
        m21(arg0: number): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        mapnYXnZ(): this;
        mapnZXnY(arg0: Internal.Matrix3d_): this;
        get(arg0: number[], arg1: number): number[];
        rotationXYZ(arg0: number, arg1: number, arg2: number): this;
        "reflect(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix3d_): this;
        mapYZX(): this;
        mul(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        "set(org.joml.Vector3dc,org.joml.Vector3dc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        transpose(arg0: Internal.Matrix3d_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number): this;
        mapnYXZ(): this;
        "scale(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        negateX(): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_): this;
        rotateLocal(arg0: Internal.Quaternionfc_): this;
        normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        "set(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        getColumn(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        m20(arg0: number): this;
        rotation(arg0: Internal.AxisAngle4d_): this;
        "rotate(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        "rotate(org.joml.AxisAngle4d,org.joml.Matrix3d)"(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix3d_): this;
        setColumn(arg0: number, arg1: Internal.Vector3dc_): this;
        notify(): void;
        "set(int,int,double)"(arg0: number, arg1: number, arg2: number): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix3d_): this;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        "rotateLocal(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        "rotate(double,org.joml.Vector3dc,org.joml.Matrix3d)"(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix3d_): this;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        sub(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        mapnYZnX(): this;
        rotateY(arg0: number, arg1: Internal.Matrix3d_): this;
        scaling(arg0: Internal.Vector3dc_): this;
        "rotation(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        rotate(arg0: Internal.Quaterniondc_): this;
        mapnZYX(arg0: Internal.Matrix3d_): this;
        normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        "rotation(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        mapnZYX(): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        mapYZX(arg0: Internal.Matrix3d_): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number): this;
        mapnYZnX(arg0: Internal.Matrix3d_): this;
        cofactor(arg0: Internal.Matrix3d_): this;
        getRow(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        mapXnZY(arg0: Internal.Matrix3d_): this;
        getScale(arg0: Internal.Vector3d_): Internal.Vector3d;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix3d_): this;
        mapZnXY(arg0: Internal.Matrix3d_): this;
        mapnYXZ(arg0: Internal.Matrix3d_): this;
        transpose(): this;
        "set(float[])"(arg0: number[]): this;
        rotation(arg0: Internal.AxisAngle4f_): this;
        reflection(arg0: Internal.Quaterniondc_): this;
        getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapZnXY(): this;
        rotation(arg0: number, arg1: Internal.Vector3dc_): this;
        "get(float[])"(arg0: number[]): number[];
        negateX(arg0: Internal.Matrix3d_): this;
        cofactor(): this;
        transform(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        rotateZ(arg0: number, arg1: Internal.Matrix3d_): this;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        mapXnZY(): this;
        getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotate(arg0: number, arg1: Internal.Vector3fc_): this;
        normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        get(arg0: number, arg1: number): number;
        "setTransposed(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        hashCode(): number;
        zero(): this;
        positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateYXZ(arg0: Internal.Vector3d_): this;
        mapXZY(arg0: Internal.Matrix3d_): this;
        set(arg0: number[]): this;
        "rotate(double,org.joml.Vector3fc,org.joml.Matrix3d)"(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix3d_): this;
        "rotate(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        set(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        setRow(arg0: number, arg1: Internal.Vector3dc_): this;
        "getUnnormalizedRotation(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        mapZnYnX(arg0: Internal.Matrix3d_): this;
        "getTransposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "mul(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        swap(arg0: Internal.Matrix3d_): this;
        m20(): number;
        "getNormalizedRotation(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        rotate(arg0: Internal.AxisAngle4d_): this;
        mapXnYnZ(): this;
        negateY(arg0: Internal.Matrix3d_): this;
        mapnYnZX(): this;
        scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        "rotate(org.joml.Quaternionfc,org.joml.Matrix3d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix3d_): this;
        rotateLocalY(arg0: number): this;
        m02(arg0: number): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        "scaling(double)"(arg0: number): this;
        rotateY(arg0: number): this;
        getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        mapnZnYnX(arg0: Internal.Matrix3d_): this;
        positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnXZY(arg0: Internal.Matrix3d_): this;
        setRowColumn(arg0: number, arg1: number, arg2: number): this;
        scale(arg0: number, arg1: number, arg2: number): this;
        getClass(): typeof any;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        mapZYX(): this;
        add(arg0: Internal.Matrix3dc_): this;
        transformTranspose(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        mulLocal(arg0: Internal.Matrix3dc_): this;
        rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix3d_): this;
        mapYnZX(): this;
        mapnXnYnZ(): this;
        mapnXnYZ(): this;
        set(arg0: Internal.AxisAngle4d_): this;
        rotateX(arg0: number, arg1: Internal.Matrix3d_): this;
        rotateX(arg0: number): this;
        rotation(arg0: number, arg1: Internal.Vector3fc_): this;
        mulComponentWise(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        negateZ(arg0: Internal.Matrix3d_): this;
        "set(double[])"(arg0: number[]): this;
        rotate(arg0: Internal.AxisAngle4f_): this;
        "getTransposed(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mulComponentWise(arg0: Internal.Matrix3dc_): this;
        scale(arg0: number): this;
        set(arg0: Internal.ByteBuffer_): this;
        rotateLocalX(arg0: number): this;
        transformTranspose(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        mulLocal(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        m01(arg0: number): this;
        positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Quaterniondc_): this;
        mapnXYnZ(): this;
        mapnXnZY(arg0: Internal.Matrix3d_): this;
        rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix3d_): this;
        getRowColumn(arg0: number, arg1: number): number;
        rotateLocalX(arg0: number, arg1: Internal.Matrix3d_): this;
        "set(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        m12(arg0: number): this;
        set(arg0: Internal.AxisAngle4f_): this;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        mapnYZX(): this;
        mapnXnZnY(): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        "set(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        mapXnZnY(): this;
        mapZnXnY(arg0: Internal.Matrix3d_): this;
        sub(arg0: Internal.Matrix3dc_): this;
        "scale(double,org.joml.Matrix3d)"(arg0: number, arg1: Internal.Matrix3d_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        m00(arg0: number): this;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        add(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        setLookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotateLocalY(arg0: number, arg1: Internal.Matrix3d_): this;
        "rotation(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        m11(arg0: number): this;
        scaling(arg0: number): this;
        "rotation(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        mapnXnYZ(arg0: Internal.Matrix3d_): this;
        "getTransposed(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        invert(): this;
        scale(arg0: Internal.Vector3dc_): this;
        mapnZYnX(arg0: Internal.Matrix3d_): this;
        negateZ(): this;
        "get(double[],int)"(arg0: number[], arg1: number): number[];
        mapnXnZY(): this;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateLocal(arg0: Internal.Quaterniondc_): this;
        transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        rotateZ(arg0: number): this;
        set(arg0: number[]): this;
        getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        m22(arg0: number): this;
        mapnYZX(arg0: Internal.Matrix3d_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number): this;
        mapnZnXnY(arg0: Internal.Matrix3d_): this;
        "set(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        "rotate(org.joml.Quaterniondc,org.joml.Matrix3d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapnYnZnX(arg0: Internal.Matrix3d_): this;
        "getTransposed(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        identity(): this;
        mapnZnXY(arg0: Internal.Matrix3d_): this;
        m01(): number;
        "getNormalizedRotation(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        "transform(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapZXnY(arg0: Internal.Matrix3d_): this;
        mapnZnYnX(): this;
        mapXnYnZ(arg0: Internal.Matrix3d_): this;
        mapZnYnX(): this;
        get(arg0: number[]): number[];
        "reflection(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        toString(arg0: Internal.NumberFormat_): string;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        m12(): number;
        "set(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        "rotation(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        clone(): any;
        rotateLocal(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        getRotation(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        mapnZnXnY(): this;
        mapnXZnY(): this;
        rotationTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "rotate(org.joml.AxisAngle4f,org.joml.Matrix3d)"(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix3d_): this;
        mapnYnXZ(): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        m00(): number;
        get(arg0: number[]): number[];
        determinant(): number;
        "set(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): this;
        toString(): string;
        invert(arg0: Internal.Matrix3d_): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3d_): this;
        notifyAll(): void;
        "set(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        mapnZnYX(): this;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        m11(): number;
        "transform(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        mapYnXZ(arg0: Internal.Matrix3d_): this;
        "rotate(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        rotationTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m22(): number;
        mapZnXnY(): this;
        "reflect(org.joml.Vector3dc,org.joml.Matrix3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix3d_): this;
        mapXnZnY(arg0: Internal.Matrix3d_): this;
        mapYXZ(): this;
        reflect(arg0: Internal.Vector3dc_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "rotateLocal(org.joml.Quaterniondc,org.joml.Matrix3d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        "quadraticFormProduct(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): number;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix3d_): this;
        "getTransposed(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        scaling(arg0: number, arg1: number, arg2: number): this;
        setColumn(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapnXnZnY(arg0: Internal.Matrix3d_): this;
        m10(): number;
        "get(float[],int)"(arg0: number[], arg1: number): number[];
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "getTransposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Matrix3d_): this;
        mapnXZnY(arg0: Internal.Matrix3d_): this;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        wait(arg0: number, arg1: number): void;
        "rotation(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapnYnXnZ(): this;
        m21(): number;
        "set(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        "transform(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapZYnX(arg0: Internal.Matrix3d_): this;
        rotateLocalZ(arg0: number): this;
        reflection(arg0: Internal.Vector3dc_): this;
        set(arg0: Internal.Matrix2fc_): this;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mapZXY(): this;
        "getUnnormalizedRotation(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        mapYnXnZ(): this;
        mapnXYnZ(arg0: Internal.Matrix3d_): this;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "get(int,int)"(arg0: number, arg1: number): number;
        set(arg0: Internal.Quaternionfc_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        mapYnZnX(arg0: Internal.Matrix3d_): this;
        mapnZnYX(arg0: Internal.Matrix3d_): this;
        mapnXnYnZ(arg0: Internal.Matrix3d_): this;
        "reflect(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        set "(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_)
        set "(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_)
        set transposed(arg0: Internal.Matrix3fc_)
        get finite(): boolean
        set "(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_)
        set "transposed(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_)
        set floats(arg0: Internal.ByteBuffer_)
        set transposed(arg0: Internal.Matrix3dc_)
        set "(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_)
        set "(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_)
        set fromAddress(arg0: number)
        set "(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_)
        set "(float[])"(arg0: number[])
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set "transposed(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_)
        get class(): typeof any
        set "(double[])"(arg0: number[])
        set "(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_)
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        set "(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_)
        set "(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_)
        set "(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_)
        set "(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_)
        set "(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_)
        m01: number;
        m12: number;
        m02: number;
        m10: number;
        m21: number;
        m00: number;
        m11: number;
        m22: number;
        m20: number;
    }
    type Matrix3d_ = Matrix3d;
    class BlockPositionSource$Type implements Internal.PositionSourceType<Internal.BlockPositionSource> {
        constructor()
        getClass(): typeof any;
        "write(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.level.gameevent.BlockPositionSource)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.BlockPositionSource_): void;
        toString(): string;
        notifyAll(): void;
        "write(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.level.gameevent.PositionSource)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.PositionSource_): void;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.BlockPositionSource_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static register<S extends Internal.PositionSourceType<T>, T extends Internal.PositionSource>(arg0: string, arg1: S): S;
        hashCode(): number;
        static toNetwork<T extends Internal.PositionSource>(arg0: T, arg1: Internal.FriendlyByteBuf_): void;
        wait(): void;
        codec(): Internal.Codec<Internal.BlockPositionSource>;
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.PositionSource;
        wait(arg0: number): void;
        read(arg0: Internal.FriendlyByteBuf_): Internal.BlockPositionSource;
        equals(arg0: any): boolean;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.PositionSource_): void;
        get class(): typeof any
    }
    type BlockPositionSource$Type_ = BlockPositionSource$Type;
    class ElectromancerArmorItem extends Internal.ImbuableChestplateArmorItem implements Internal.ArmorCapeProvider {
        constructor(arg0: Internal.ArmorItem$Type_, arg1: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getTick(arg0: any): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isPerspectiveAware(): boolean;
        getCapeResourceLocation(): ResourceLocation;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        setAnimData<D>(arg0: Internal.Entity_, arg1: number, arg2: Internal.SerializableDataTicket_<D>, arg3: D): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        "triggerAnim(net.minecraft.world.entity.Entity,long,java.lang.String,java.lang.String)"<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        getDefense(): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        supplyRenderer(): Internal.GeoArmorRenderer<any>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        static dispenseArmor(arg0: Internal.BlockSource_, arg1: Internal.ItemStack_): boolean;
        getMaterial(): Internal.ArmorMaterial;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        triggerAnim<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        triggerAnim<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        static registerSyncedAnimatable(arg0: Internal.GeoAnimatable_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getBoneResetTime(): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getToughness(): number;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        syncAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>, arg2: D, arg3: Internal.PacketDistributor$PacketTarget_): void;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static getOrAssignId(arg0: Internal.ItemStack_, arg1: Internal.ServerLevel_): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        handler$zcm000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        static "getId(net.minecraft.world.item.Item)"(arg0: Internal.Item_): number;
        registerControllers(arg0: Internal.AnimatableManager$ControllerRegistrar_): void;
        equals(arg0: any): boolean;
        "triggerAnim(long,java.lang.String,java.lang.String,net.minecraftforge.network.PacketDistributor$PacketTarget)"<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        setRarity(arg0: Internal.Rarity_): void;
        getType(): Internal.ArmorItem$Type;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        initializeSpellContainer(arg0: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>): D;
        shouldPlayAnimsWhileGamePaused(): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getEquipmentSlot(): Internal.EquipmentSlot;
        static getId(arg0: Internal.ItemStack_): number;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        static "getId(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEquipSound(): Internal.SoundEvent;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get perspectiveAware(): boolean
        get capeResourceLocation(): ResourceLocation
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        get defense(): number
        get edible(): boolean
        get material(): Internal.ArmorMaterial
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get boneResetTime(): number
        set nameKey(arg0: string)
        get toughness(): number
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get type(): Internal.ArmorItem$Type
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        set attackDamage(attackDamage: number)
        get equipmentSlot(): Internal.EquipmentSlot
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get equipSound(): Internal.SoundEvent
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type ElectromancerArmorItem_ = ElectromancerArmorItem;
    interface RecipeKJS {
        setGroup(group: string): void;
        getGroup(): string;
        getOrCreateId(): ResourceLocation;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getSchema(): Internal.RecipeSchema;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getMod(): string;
        getType(): ResourceLocation;
        set group(group: string)
        get group(): string
        get orCreateId(): ResourceLocation
        get schema(): Internal.RecipeSchema
        get mod(): string
        get type(): ResourceLocation
    }
    type RecipeKJS_ = RecipeKJS;
    interface IntStream extends Internal.BaseStream<number, Internal.IntStream> {
        concat(arg0: Internal.IntStream_, arg1: Internal.IntStream_): this;
        range(arg0: number, arg1: number): this;
        abstract spliterator(): Internal.Spliterator$OfInt;
        abstract min(): Internal.OptionalInt;
        abstract map(arg0: Internal.IntUnaryOperator_): this;
        abstract isParallel(): boolean;
        abstract onClose(arg0: Internal.Runnable_): this;
        builder(): Internal.IntStream$Builder;
        generate(arg0: Internal.IntSupplier_): this;
        abstract sum(): number;
        abstract findFirst(): Internal.OptionalInt;
        abstract max(): Internal.OptionalInt;
        dropWhile(arg0: Internal.IntPredicate_): this;
        rangeClosed(arg0: number, arg1: number): this;
        abstract count(): number;
        abstract findAny(): Internal.OptionalInt;
        abstract reduce(arg0: Internal.IntBinaryOperator_): Internal.OptionalInt;
        mapMulti(arg0: Internal.IntStream$IntMapMultiConsumer_): this;
        of(arg0: number): this;
        abstract mapToLong(arg0: Internal.IntToLongFunction_): Internal.LongStream;
        iterate(arg0: number, arg1: Internal.IntUnaryOperator_): this;
        abstract reduce(arg0: number, arg1: Internal.IntBinaryOperator_): number;
        abstract filter(arg0: Internal.IntPredicate_): this;
        abstract anyMatch(arg0: Internal.IntPredicate_): boolean;
        abstract distinct(): this;
        iterate(arg0: number, arg1: Internal.IntPredicate_, arg2: Internal.IntUnaryOperator_): this;
        abstract peek(arg0: Internal.IntConsumer_): this;
        takeWhile(arg0: Internal.IntPredicate_): this;
        "of(int)"(arg0: number): this;
        abstract collect<R>(arg0: Internal.Supplier_<R>, arg1: Internal.ObjIntConsumer_<R>, arg2: Internal.BiConsumer_<R, R>): R;
        abstract mapToDouble(arg0: Internal.IntToDoubleFunction_): Internal.DoubleStream;
        abstract forEach(arg0: Internal.IntConsumer_): void;
        abstract sorted(): this;
        abstract flatMap(arg0: Internal.IntFunction_<Internal.IntStream>): this;
        abstract toArray(): number[];
        abstract noneMatch(arg0: Internal.IntPredicate_): boolean;
        abstract unordered(): this;
        sequential(): Internal.BaseStream<any, any>;
        empty(): this;
        abstract mapToObj<U>(arg0: Internal.IntFunction_<U>): Internal.Stream<U>;
        "of(int[])"(...arg0: number[]): this;
        iterator(): Internal.Iterator<any>;
        abstract parallel(): this;
        abstract limit(arg0: number): this;
        of(...arg0: number[]): this;
        abstract asDoubleStream(): Internal.DoubleStream;
        abstract allMatch(arg0: Internal.IntPredicate_): boolean;
        abstract asLongStream(): Internal.LongStream;
        abstract forEachOrdered(arg0: Internal.IntConsumer_): void;
        abstract boxed(): Internal.Stream<number>;
        abstract close(): void;
        abstract summaryStatistics(): Internal.IntSummaryStatistics;
        abstract average(): Internal.OptionalDouble;
        abstract skip(arg0: number): this;
        get parallel(): boolean
    }
    type IntStream_ = IntStream;
    interface BlockEntityTicker <T extends Internal.BlockEntity> {
        abstract tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: T): void;
        (arg0: Internal.Level, arg1: BlockPos, arg2: Internal.BlockState, arg3: T): void;
    }
    type BlockEntityTicker_<T extends Internal.BlockEntity> = ((arg0: Internal.Level, arg1: BlockPos, arg2: Internal.BlockState, arg3: T)=> void) | BlockEntityTicker<T>;
    interface ClimateProperties {
        abstract getTemperatureModifier(): Internal.Biome$TemperatureModifier;
        abstract getDownfall(): number;
        abstract getTemperature(): number;
        abstract hasPrecipitation(): boolean;
        get temperatureModifier(): Internal.Biome$TemperatureModifier
        get downfall(): number
        get temperature(): number
    }
    type ClimateProperties_ = ClimateProperties;
    interface IConfigurable {
        abstract getConfigElement<T>(...arg0: string[]): Internal.Optional<T>;
        abstract getConfigList(...arg0: string[]): Internal.List<Internal.IConfigurable>;
    }
    type IConfigurable_ = IConfigurable;
    class AbstractUniform {
        constructor()
        getClass(): typeof any;
        set(arg0: number): void;
        setMat3x2(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setMat3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        set(arg0: number, arg1: number, arg2: number): void;
        "set(int,int)"(arg0: number, arg1: number): void;
        "setSafe(float,float,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "set(float,float)"(arg0: number, arg1: number): void;
        setMat4x2(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        set(arg0: number, arg1: number): void;
        setMat4x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): void;
        "set(int,int,int)"(arg0: number, arg1: number, arg2: number): void;
        "set(int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: Vec3f_): void;
        setSafe(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: Vec4f_): void;
        "set(org.joml.Matrix4f)"(arg0: Matrix4f_): void;
        set(arg0: number, arg1: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        "set(float,float,float)"(arg0: number, arg1: number, arg2: number): void;
        setMat2x2(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: number, arg1: number, arg2: number): void;
        setMat3x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        toString(): string;
        setSafe(arg0: number, arg1: number, arg2: number, arg3: number): void;
        notifyAll(): void;
        "set(org.joml.Matrix3f)"(arg0: Matrix3f_): void;
        set(arg0: number): void;
        set(arg0: number[]): void;
        setMat4x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        "set(org.joml.Vector4f)"(arg0: Vec4f_): void;
        "set(float[])"(arg0: number[]): void;
        "setSafe(int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number): void;
        "set(org.joml.Vector3f)"(arg0: Vec3f_): void;
        hashCode(): number;
        set(arg0: Matrix4f_): void;
        "set(float,float,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: Matrix3f_): void;
        setMat2x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        wait(): void;
        "set(float)"(arg0: number): void;
        wait(arg0: number): void;
        setMat2x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        equals(arg0: any): boolean;
        "set(int)"(arg0: number): void;
        get class(): typeof any
        set "(org.joml.Matrix4f)"(arg0: Matrix4f_)
        set "(org.joml.Matrix3f)"(arg0: Matrix3f_)
        set "(org.joml.Vector4f)"(arg0: Vec4f_)
        set "(float[])"(arg0: number[])
        set "(org.joml.Vector3f)"(arg0: Vec3f_)
        set "(float)"(arg0: number)
        set "(int)"(arg0: number)
    }
    type AbstractUniform_ = AbstractUniform;
    interface MethodTypeDesc extends Internal.ConstantDesc, Internal.TypeDescriptor$OfMethod<Internal.ClassDesc, Internal.MethodTypeDesc> {
        displayDescriptor(): string;
        "insertParameterTypes(int,java.lang.invoke.TypeDescriptor$OfField[])"(arg0: number, arg1: Internal.TypeDescriptor$OfField_<any>[]): Internal.TypeDescriptor$OfMethod<any, any>;
        "changeReturnType(java.lang.invoke.TypeDescriptor$OfField)"(arg0: Internal.TypeDescriptor$OfField_<any>): Internal.TypeDescriptor$OfMethod<any, any>;
        descriptorString(): string;
        dropParameterTypes(arg0: number, arg1: number): Internal.TypeDescriptor$OfMethod<any, any>;
        "changeParameterType(int,java.lang.invoke.TypeDescriptor$OfField)"(arg0: number, arg1: Internal.TypeDescriptor$OfField_<any>): Internal.TypeDescriptor$OfMethod<any, any>;
        abstract returnType(): Internal.ClassDesc;
        abstract parameterCount(): number;
        abstract resolveConstantDesc(arg0: Internal.MethodHandles$Lookup_): any;
        abstract "changeParameterType(int,java.lang.constant.ClassDesc)"(arg0: number, arg1: Internal.ClassDesc_): this;
        abstract changeReturnType(arg0: Internal.ClassDesc_): this;
        abstract "changeReturnType(java.lang.constant.ClassDesc)"(arg0: Internal.ClassDesc_): this;
        of(arg0: Internal.ClassDesc_, ...arg1: Internal.ClassDesc_[]): this;
        insertParameterTypes(arg0: number, arg1: Internal.TypeDescriptor$OfField_<any>[]): Internal.TypeDescriptor$OfMethod<any, any>;
        abstract parameterList(): Internal.List<Internal.ClassDesc>;
        changeParameterType(arg0: number, arg1: Internal.TypeDescriptor$OfField_<any>): Internal.TypeDescriptor$OfMethod<any, any>;
        abstract changeParameterType(arg0: number, arg1: Internal.ClassDesc_): this;
        parameterType(arg0: number): Internal.TypeDescriptor$OfField<any>;
        changeReturnType(arg0: Internal.TypeDescriptor$OfField_<any>): Internal.TypeDescriptor$OfMethod<any, any>;
        abstract "insertParameterTypes(int,java.lang.constant.ClassDesc[])"(arg0: number, ...arg1: Internal.ClassDesc_[]): this;
        abstract equals(arg0: any): boolean;
        ofDescriptor(arg0: string): this;
        abstract insertParameterTypes(arg0: number, ...arg1: Internal.ClassDesc_[]): this;
        abstract parameterArray(): Internal.ClassDesc[];
    }
    type MethodTypeDesc_ = MethodTypeDesc;
    class Typed <A> {
        constructor(arg0: com.mojang.datafixers.types.Type_<A>, arg1: Internal.DynamicOps_<any>, arg2: A)
        getClass(): typeof any;
        "set(com.mojang.datafixers.OpticFinder,com.mojang.datafixers.Typed)"<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: Internal.Typed_<FR>): Internal.Typed<any>;
        getAllTyped<FT>(arg0: Internal.OpticFinder_<FT>): Internal.List<Internal.Typed<FT>>;
        updateTyped<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Function_<Internal.Typed<any>, Internal.Typed<any>>): Internal.Typed<any>;
        getValue(): A;
        inj2<B>(arg0: com.mojang.datafixers.types.Type_<B>): Internal.Typed<Internal.Either<B, A>>;
        getType(): com.mojang.datafixers.types.Type<A>;
        updateRecursive<FT>(arg0: Internal.OpticFinder_<FT>, arg1: Internal.Function_<FT, FT>): Internal.Typed<any>;
        out(): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getTyped<FT>(arg0: Internal.OpticFinder_<FT>): Internal.Typed<FT>;
        getOrCreateTyped<FT>(arg0: Internal.OpticFinder_<FT>): Internal.Typed<FT>;
        getAll<FT>(arg0: Internal.TypedOptic_<A, any, FT, any>): Internal.List<FT>;
        getOptional<FT>(arg0: Internal.OpticFinder_<FT>): Internal.Optional<FT>;
        getOptionalTyped<FT>(arg0: Internal.OpticFinder_<FT>): Internal.Optional<Internal.Typed<FT>>;
        update<FT>(arg0: Internal.OpticFinder_<FT>, arg1: Internal.Function_<FT, FT>): Internal.Typed<any>;
        "set(com.mojang.datafixers.OpticFinder,java.lang.Object)"<FT>(arg0: Internal.OpticFinder_<FT>, arg1: FT): Internal.Typed<any>;
        updateRecursiveTyped<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Function_<Internal.Typed<any>, Internal.Typed<any>>): Internal.Typed<any>;
        updateTyped<FT>(arg0: Internal.OpticFinder_<FT>, arg1: Internal.Function_<Internal.Typed<any>, Internal.Typed<any>>): Internal.Typed<any>;
        getOps(): Internal.DynamicOps<any>;
        toString(): string;
        inj1<B>(arg0: com.mojang.datafixers.types.Type_<B>): Internal.Typed<Internal.Either<A, B>>;
        notifyAll(): void;
        updateRecursive<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Function_<FT, FR>): Internal.Typed<any>;
        getOrCreate<FT>(arg0: Internal.OpticFinder_<FT>): FT;
        updateRecursiveTyped<FT>(arg0: Internal.OpticFinder_<FT>, arg1: Internal.Function_<Internal.Typed<any>, Internal.Typed<any>>): Internal.Typed<any>;
        hashCode(): number;
        set<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: FR): Internal.Typed<any>;
        write(): Internal.DataResult<Internal.Dynamic<any>>;
        getOrDefault<FT>(arg0: Internal.OpticFinder_<FT>, arg1: FT): FT;
        static pair<A, B>(arg0: Internal.Typed_<A>, arg1: Internal.Typed_<B>): Internal.Typed<com.mojang.datafixers.util.Pair<A, B>>;
        wait(): void;
        get<FT>(arg0: Internal.OpticFinder_<FT>): FT;
        update<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Function_<FT, FR>): Internal.Typed<any>;
        wait(arg0: number): void;
        set<FT>(arg0: Internal.OpticFinder_<FT>, arg1: FT): Internal.Typed<any>;
        set<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: Internal.Typed_<FR>): Internal.Typed<any>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get value(): A
        get type(): com.mojang.datafixers.types.Type<A>
        get ops(): Internal.DynamicOps<any>
    }
    type Typed_<A> = Typed<A>;
    class AbuseReportRequest$ClientInfo {
        constructor(arg0: string, arg1: string)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        locale: string;
        clientVersion: string;
    }
    type AbuseReportRequest$ClientInfo_ = AbuseReportRequest$ClientInfo;
    class BannerItem extends Internal.StandingAndWallBlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Block_, arg2: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getColor(): Internal.DyeColor;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): Internal.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): Internal.InteractionResult;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        static appendHoverTextFromBannerBlockEntityTag(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.Component>): void;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        handler$zcm000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get color(): Internal.DyeColor
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type BannerItem_ = BannerItem;
    class IronGolem$Crackiness extends Internal.Enum<Internal.IronGolem$Crackiness> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        getDeclaringClass(): typeof Internal.IronGolem$Crackiness;
        static values(): Internal.IronGolem$Crackiness[];
        toString(): string;
        compareTo(arg0: Internal.IronGolem$Crackiness_): number;
        notifyAll(): void;
        static byFraction(arg0: number): Internal.IronGolem$Crackiness;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        "compareTo(net.minecraft.world.entity.animal.IronGolem$Crackiness)"(arg0: Internal.IronGolem$Crackiness_): number;
        static valueOf(arg0: string): Internal.IronGolem$Crackiness;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.IronGolem$Crackiness>>;
        get class(): typeof any
        get declaringClass(): typeof Internal.IronGolem$Crackiness
        static readonly NONE: (Internal.IronGolem$Crackiness) & (Internal.IronGolem$Crackiness);
        static readonly LOW: (Internal.IronGolem$Crackiness) & (Internal.IronGolem$Crackiness);
        static readonly HIGH: (Internal.IronGolem$Crackiness) & (Internal.IronGolem$Crackiness);
        static readonly MEDIUM: (Internal.IronGolem$Crackiness) & (Internal.IronGolem$Crackiness);
    }
    type IronGolem$Crackiness_ = "medium" | "high" | "low" | "none" | IronGolem$Crackiness;
    class WildcardIngredient extends Internal.KubeJSIngredient {
        getDisplayStacks(): Internal.ItemStackSet;
        toJson(json: Internal.JsonObject_): void;
        "test(net.minecraft.world.item.ItemStack)"(stack: Internal.ItemStack_): boolean;
        asStack(): InputItem;
        notify(): void;
        toJson(): Internal.JsonElement;
        /**
         * @deprecated
        */
        static "of(net.minecraft.world.level.ItemLike[])"(...arg0: Internal.ItemLike_[]): Internal.Ingredient;
        isWildcard(): boolean;
        /**
         * @deprecated
        */
        static "of(net.minecraft.tags.TagKey)"(arg0: Internal.TagKey_<Internal.Item>): Internal.Ingredient;
        test(arg0: any): boolean;
        canBeUsedForMatching(): boolean;
        static merge(arg0: Internal.Collection_<Internal.Ingredient>): Internal.Ingredient;
        "or(net.minecraft.world.item.crafting.Ingredient)"(ingredient: Internal.Ingredient_): Internal.Ingredient;
        "and(net.minecraft.world.item.crafting.Ingredient)"(ingredient: Internal.Ingredient_): Internal.Ingredient;
        subtract(subtracted: Internal.Ingredient_): Internal.Ingredient;
        negate(): Internal.Predicate<Internal.ItemStack>;
        write(buf: Internal.FriendlyByteBuf_): void;
        /**
         * @deprecated
        */
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.Ingredient;
        checkInvalidation(): boolean;
        /**
         * @deprecated
        */
        static of(...arg0: Internal.ItemStack_[]): Internal.Ingredient;
        /**
         * @deprecated
        */
        static of(arg0: Internal.TagKey_<Internal.Item>): Internal.Ingredient;
        toNetwork(arg0: Internal.FriendlyByteBuf_): void;
        withCount(count: number): InputItem;
        getStacks(): Internal.ItemStackSet;
        "toJson()"(): Internal.JsonElement;
        or(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        "or(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        wait(): void;
        test(stack: Internal.ItemStack_): boolean;
        getSerializer(): Internal.IIngredientSerializer<Internal.Ingredient>;
        /**
         * @deprecated
        */
        static fromJson(arg0: Internal.JsonElement_): Internal.Ingredient;
        asIngredient(): Internal.Ingredient;
        getClass(): typeof any;
        isVanilla(): boolean;
        /**
         * @deprecated
        */
        static of(arg0: Internal.Stream_<Internal.ItemStack>): Internal.Ingredient;
        static invalidateAll(): void;
        isSimple(): boolean;
        static valueFromJson(arg0: Internal.JsonObject_): Internal.Ingredient$Value;
        getItemIds(): Internal.Set<string>;
        isEmpty(): boolean;
        toJson(): Internal.JsonObject;
        or(ingredient: Internal.Ingredient_): Internal.Ingredient;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        static fromValues(arg0: Internal.Stream_<Internal.Ingredient$Value>): Internal.Ingredient;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        /**
         * @deprecated
        */
        static of(): Internal.Ingredient;
        getItemTypes(): Internal.Set<Internal.Item>;
        /**
         * @deprecated
        */
        static of(...arg0: Internal.ItemLike_[]): Internal.Ingredient;
        and(ingredient: Internal.Ingredient_): Internal.Ingredient;
        "test(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        static "of(java.util.stream.Stream)"(arg0: Internal.Stream_<Internal.ItemStack>): Internal.Ingredient;
        "and(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        testItem(item: Internal.Item_): boolean;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        toString(): string;
        "toJson()"(): Internal.JsonObject;
        self(): Internal.Ingredient;
        notifyAll(): void;
        static fromJson(arg0: Internal.JsonElement_, arg1: boolean): Internal.Ingredient;
        getStackingIds(): Internal.IntList;
        hashCode(): number;
        /**
         * @deprecated
        */
        static "of(net.minecraft.world.item.ItemStack[])"(...arg0: Internal.ItemStack_[]): Internal.Ingredient;
        wait(arg0: number): void;
        getFirst(): Internal.ItemStack;
        equals(arg0: any): boolean;
        and(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        get displayStacks(): Internal.ItemStackSet
        get wildcard(): boolean
        get stacks(): Internal.ItemStackSet
        get serializer(): Internal.IIngredientSerializer<Internal.Ingredient>
        get class(): typeof any
        get vanilla(): boolean
        get simple(): boolean
        get itemIds(): Internal.Set<string>
        get empty(): boolean
        get itemTypes(): Internal.Set<Internal.Item>
        get stackingIds(): Internal.IntList
        get first(): Internal.ItemStack
        static INSTANCE: (Internal.WildcardIngredient) & (Internal.WildcardIngredient);
        static readonly SERIALIZER: Internal.KubeJSIngredientSerializer<Internal.WildcardIngredient>;
    }
    type WildcardIngredient_ = WildcardIngredient;
    interface BorderChangeListener {
        abstract onBorderSetDamageSafeZOne(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSizeLerping(arg0: Internal.WorldBorder_, arg1: number, arg2: number, arg3: number): void;
        abstract onBorderCenterSet(arg0: Internal.WorldBorder_, arg1: number, arg2: number): void;
        abstract onBorderSizeSet(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSetDamagePerBlock(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSetWarningBlocks(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSetWarningTime(arg0: Internal.WorldBorder_, arg1: number): void;
    }
    type BorderChangeListener_ = BorderChangeListener;
    class JsonPrimitive extends Internal.JsonElement {
        constructor(arg0: string)
        constructor(arg0: number)
        constructor(arg0: boolean)
        constructor(arg0: string)
        getClass(): typeof any;
        getAsBigDecimal(): Internal.BigDecimal;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getAsJsonPrimitive(): this;
        getAsLong(): number;
        getAsFloat(): number;
        isJsonObject(): boolean;
        getAsJsonArray(): Internal.JsonArray;
        isJsonArray(): boolean;
        getAsBoolean(): boolean;
        toString(): string;
        isJsonPrimitive(): boolean;
        isJsonNull(): boolean;
        deepCopy(): this;
        notifyAll(): void;
        getAsBigInteger(): Internal.BigInteger;
        isBoolean(): boolean;
        getAsDouble(): number;
        /**
         * @deprecated
        */
        getAsCharacter(): string;
        isString(): boolean;
        hashCode(): number;
        getAsInt(): number;
        getAsString(): string;
        getAsByte(): number;
        getAsNumber(): number;
        wait(): void;
        getAsJsonObject(): Internal.JsonObject;
        wait(arg0: number): void;
        isNumber(): boolean;
        getAsShort(): number;
        equals(arg0: any): boolean;
        getAsJsonNull(): Internal.JsonNull;
        get class(): typeof any
        get asBigDecimal(): Internal.BigDecimal
        get asJsonPrimitive(): Internal.JsonPrimitive
        get asLong(): number
        get asFloat(): number
        get jsonObject(): boolean
        get asJsonArray(): Internal.JsonArray
        get jsonArray(): boolean
        get asBoolean(): boolean
        get jsonPrimitive(): boolean
        get jsonNull(): boolean
        get asBigInteger(): Internal.BigInteger
        get "boolean"(): boolean
        get asDouble(): number
        /**
         * @deprecated
        */
        get asCharacter(): string
        get string(): boolean
        get asInt(): number
        get asString(): string
        get asByte(): number
        get asNumber(): number
        get asJsonObject(): Internal.JsonObject
        get number(): boolean
        get asShort(): number
        get asJsonNull(): Internal.JsonNull
    }
    type JsonPrimitive_ = JsonPrimitive;
    class AbuseReportLimits extends Internal.Record {
        constructor(maxOpinionCommentsLength: number, maxReportedMessageCount: number, maxEvidenceMessageCount: number, leadingContextMessageCount: number, trailingContextMessageCount: number)
        maxReportedMessageCount(): number;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        maxEvidenceMessageCount(): number;
        hashCode(): number;
        leadingContextMessageCount(): number;
        wait(): void;
        trailingContextMessageCount(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        maxOpinionCommentsLength(): number;
        get class(): typeof any
        static readonly DEFAULTS: (Internal.AbuseReportLimits) & (Internal.AbuseReportLimits);
    }
    type AbuseReportLimits_ = AbuseReportLimits;
    class HurtBySensor extends Internal.Sensor<Internal.LivingEntity> {
        constructor()
        getClass(): typeof any;
        toString(): string;
        static isEntityTargetable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notifyAll(): void;
        static isEntityAttackableIgnoringLineOfSight(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        tick(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): void;
        wait(): void;
        static isEntityAttackable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        requires(): Internal.Set<Internal.MemoryModuleType<any>>;
        get class(): typeof any
    }
    type HurtBySensor_ = HurtBySensor;
    class Matrix4d implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix4dc {
        constructor()
        constructor(arg0: Internal.Matrix4x3dc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: Internal.Matrix4dc_)
        constructor(arg0: Internal.Matrix3dc_)
        constructor(arg0: Internal.Matrix4fc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number)
        constructor(arg0: Internal.Matrix4x3fc_)
        constructor(arg0: Internal.Vector4d_, arg1: Internal.Vector4d_, arg2: Internal.Vector4d_, arg3: Internal.Vector4d_)
        "rotateAffine(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        unprojectInv(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        invertOrtho(arg0: Internal.Matrix4d_): this;
        determinant3x3(): number;
        "transpose3x3(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        "perspectiveOffCenter(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix4dc_): this;
        rotateTranslation(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        projectedGridRange(arg0: Internal.Matrix4dc_, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        zero(): this;
        translationRotateScale(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        setFrustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapnXZnY(arg0: Internal.Matrix4d_): this;
        rotateAffine(arg0: Internal.Quaterniondc_): this;
        unproject(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        rotationX(arg0: number): this;
        "getColumn(int,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        perspectiveNear(): number;
        transformDirection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "reflection(org.joml.Quaterniondc,org.joml.Vector3dc)"(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        rotateAroundAffine(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "set(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        normal(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        rotation(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotate(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix4d_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        unprojectInv(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        normalize3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        mapnXnZnY(arg0: Internal.Matrix4d_): this;
        obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        mapnYXZ(arg0: Internal.Matrix4d_): this;
        mapZYnX(): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translationRotateScaleMulAffine(arg0: Internal.Vector3fc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3fc_, arg3: Internal.Matrix4d_): this;
        "scale(double)"(arg0: number): this;
        translationRotateScale(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        "transformProject(org.joml.Vector4dc,org.joml.Vector3d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        transformAab(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapYXnZ(arg0: Internal.Matrix4d_): this;
        translationRotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        setLookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        mulOrthoAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapZnYX(): this;
        mapYXZ(arg0: Internal.Matrix4d_): this;
        setPerspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        "reflect(org.joml.Vector3dc,org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        "rotate(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        set(arg0: number[], arg1: number): this;
        testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        "perspectiveRect(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        transpose3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        tile(arg0: number, arg1: number, arg2: number, arg3: number): this;
        isFinite(): boolean;
        shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4d_): this;
        setFloats(arg0: Internal.ByteBuffer_): this;
        rotateTowardsXY(arg0: number, arg1: number): this;
        set(arg0: Internal.FloatBuffer_): this;
        rotationZ(arg0: number): this;
        invertAffine(arg0: Internal.Matrix4d_): this;
        perspectiveInvOrigin(arg0: Internal.Vector3d_): Internal.Vector3d;
        transformTranspose(arg0: Internal.Vector4d_): Internal.Vector4d;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        mapnZnXnY(): this;
        "scaling(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        mapnYnXZ(arg0: Internal.Matrix4d_): this;
        rotationTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        scale(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        "frustum(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        set4x3(arg0: Internal.Matrix4x3dc_): this;
        rotation(arg0: Internal.Quaternionfc_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        get4x3Transposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateAffine(arg0: Internal.Quaternionfc_): this;
        transformProject(arg0: Internal.Vector4d_): Internal.Vector4d;
        "perspectiveLH(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4d_): this;
        mapYZnX(): this;
        fma4x3(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Matrix4d_): this;
        "rotateLocal(org.joml.Quaternionfc,org.joml.Matrix4d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        m02(): number;
        scaleLocal(arg0: number, arg1: number, arg2: number): this;
        "translateLocal(org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        "rotate(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mul(arg0: Matrix4f_): this;
        "orthoSymmetric(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        set(arg0: Internal.Matrix3dc_): this;
        rotateAffineZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        "translationRotateScale(org.joml.Vector3dc,org.joml.Quaterniondc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        m13(): number;
        setFrustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "ortho(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "mul(org.joml.Matrix4x3fc,org.joml.Matrix4d)"(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4d_): this;
        mapnZXnY(): this;
        negateZ(): this;
        setRotationZYX(arg0: number, arg1: number, arg2: number): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_): this;
        translationRotateScale(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): this;
        mul(arg0: Internal.Matrix3x2fc_, arg1: Internal.Matrix4d_): this;
        mapnXZY(): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        mapYZnX(arg0: Internal.Matrix4d_): this;
        setColumn(arg0: number, arg1: Internal.Vector4dc_): this;
        "set(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        mul(arg0: Internal.Matrix4x3dc_): this;
        m22(arg0: number): this;
        mapnZXnY(arg0: Internal.Matrix4d_): this;
        translate(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transformProject(arg0: Internal.Vector4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        setPerspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "get4x3Transposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        scale(arg0: number, arg1: Internal.Matrix4d_): this;
        mapXZY(): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        transformDirection(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4d_): this;
        m33(arg0: number): this;
        add(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapZnYX(arg0: Internal.Matrix4d_): this;
        rotateZ(arg0: number, arg1: Internal.Matrix4d_): this;
        getToAddress(arg0: number): Internal.Matrix4dc;
        rotation(arg0: Internal.Quaterniondc_): this;
        mapYXnZ(): this;
        "scale(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        "set4x3(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        rotateZYX(arg0: number, arg1: number, arg2: number): this;
        setOrtho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translationRotateScale(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        setTranslation(arg0: number, arg1: number, arg2: number): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "translation(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        "rotate(org.joml.Quaternionfc,org.joml.Matrix4d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number): this;
        invertOrtho(): this;
        translationRotate(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_): this;
        translateLocal(arg0: Internal.Vector3dc_): this;
        normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get4x3Transposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        getColumn(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        "rotate(double,org.joml.Vector3fc,org.joml.Matrix4d)"(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4d_): this;
        "set(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        translation(arg0: Internal.Vector3dc_): this;
        mapnYXZ(): this;
        negateX(): this;
        rotate(arg0: number, arg1: Internal.Vector3fc_): this;
        mapYZX(arg0: Internal.Matrix4d_): this;
        "translationRotateScaleInvert(org.joml.Vector3dc,org.joml.Quaterniondc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        withLookAtUp(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        notify(): void;
        scaleXY(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        lerp(arg0: Internal.Matrix4dc_, arg1: number): this;
        mapXnZY(arg0: Internal.Matrix4d_): this;
        "translationRotateScaleInvert(org.joml.Vector3fc,org.joml.Quaternionfc,double)"(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        m20(arg0: number): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        "translateLocal(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        "translationRotateScaleInvert(org.joml.Vector3dc,org.joml.Quaterniondc,double)"(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        mapZnXY(arg0: Internal.Matrix4d_): this;
        rotation(arg0: Internal.AxisAngle4d_): this;
        "rotate(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        "unprojectInv(org.joml.Vector3dc,int[],org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        setRotationXYZ(arg0: number, arg1: number, arg2: number): this;
        unproject(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        getRow(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        rotateX(arg0: number, arg1: Internal.Matrix4d_): this;
        m31(arg0: number): this;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        "frustumLH(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "rotate(double,org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        rotate(arg0: Internal.Quaternionfc_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotateTranslation(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "get(float[])"(arg0: number[]): number[];
        cofactor3x3(): this;
        mapZnXY(): this;
        rotateYXZ(arg0: Internal.Vector3d_): this;
        "translationRotateScale(org.joml.Vector3fc,org.joml.Quaternionfc,double)"(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        rotation(arg0: Internal.AxisAngle4f_): this;
        "scale(double,org.joml.Matrix4d)"(arg0: number, arg1: Internal.Matrix4d_): this;
        mapnYnZX(arg0: Internal.Matrix4d_): this;
        getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        translateLocal(arg0: Internal.Vector3fc_): this;
        cofactor3x3(arg0: Internal.Matrix4d_): this;
        normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        get(arg0: number, arg1: number): number;
        transformProject(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        rotation(arg0: number, arg1: Internal.Vector3dc_): this;
        rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        rotationYXZ(arg0: number, arg1: number, arg2: number): this;
        hashCode(): number;
        translation(arg0: Internal.Vector3fc_): this;
        "transformProject(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        m03(arg0: number): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        rotateZ(arg0: number): this;
        "cofactor3x3(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        billboardCylindrical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "getNormalizedRotation(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        setPerspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapZYX(): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        get3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        perspectiveOrigin(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnXnYnZ(): this;
        getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        negateX(arg0: Internal.Matrix4d_): this;
        invertPerspective(): this;
        testSphere(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mapnYnZX(): this;
        scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        setRowColumn(arg0: number, arg1: number, arg2: number): this;
        scale(arg0: number): this;
        rotateLocalX(arg0: number): this;
        translationRotateScaleInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        "mul(org.joml.Matrix3x2fc,org.joml.Matrix4d)"(arg0: Internal.Matrix3x2fc_, arg1: Internal.Matrix4d_): this;
        "reflect(org.joml.Quaterniondc,org.joml.Vector3dc)"(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        mulLocalAffine(arg0: Internal.Matrix4dc_): this;
        mapnZnYnX(arg0: Internal.Matrix4d_): this;
        translate(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        scale(arg0: number, arg1: number, arg2: number): this;
        mapnXYnZ(): this;
        "getTransposed(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "get4x3Transposed(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        set(arg0: number[], arg1: number): this;
        translate(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        rotateX(arg0: number): this;
        mapZnYnX(arg0: Internal.Matrix4d_): this;
        m30(): number;
        positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        project(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        "set3x3(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        mapXnYnZ(): this;
        "reflection(org.joml.Vector3dc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        sub4x3(arg0: Internal.Matrix4dc_): this;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        "orthoSymmetricLH(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "invertPerspectiveView(org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        rotateLocal(arg0: Internal.Quaterniondc_): this;
        "set(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        m01(arg0: number): this;
        mapnYZX(arg0: Internal.Matrix4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        shadow(arg0: Internal.Vector4d_, arg1: Internal.Matrix4d_): this;
        rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        rotationTowardsXY(arg0: number, arg1: number): this;
        frustumAabb(arg0: Internal.Vector3d_, arg1: Internal.Vector3d_): this;
        "transformProject(double,double,double,double,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector3d_): Internal.Vector3d;
        "set4x3(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        rotateLocalX(arg0: number, arg1: Internal.Matrix4d_): this;
        mulPerspectiveAffine(arg0: Internal.Matrix4dc_): this;
        translationRotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        mapnYZX(): this;
        m12(arg0: number): this;
        rotateAffineZYX(arg0: number, arg1: number, arg2: number): this;
        "rotateAffine(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        negateZ(arg0: Internal.Matrix4d_): this;
        invert(): this;
        rotateXYZ(arg0: Internal.Vector3d_): this;
        "invertPerspectiveView(org.joml.Matrix4x3dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        "perspectiveOffCenterFovLH(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        setPerspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        m23(arg0: number): this;
        "perspectiveOffCenterFov(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "getTransposed(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        "mulPerspectiveAffine(org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "get(double[],int)"(arg0: number[], arg1: number): number[];
        billboardSpherical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "rotation(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        "set(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        "transformProject(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        "mulPerspectiveAffine(org.joml.Matrix4x3dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_, arg5: Internal.Matrix4d_): this;
        "shadow(org.joml.Vector4dc,double,double,double,double)"(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number): this;
        "rotate(org.joml.Quaterniondc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        "add4x3(org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        invert(arg0: Internal.Matrix4d_): this;
        isAffine(): boolean;
        get4x3Transposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "getTransposed(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "translateLocal(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        mapYnXnZ(): this;
        m01(): number;
        rotateTranslation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        set3x3(arg0: Internal.Matrix4dc_): this;
        invertFrustum(): this;
        "getNormalizedRotation(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        mapYnZnX(arg0: Internal.Matrix4d_): this;
        "set(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        "shadow(double,double,double,double,org.joml.Matrix4dc)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_): this;
        sub(arg0: Internal.Matrix4dc_): this;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        identity(): this;
        set4x3(arg0: Internal.Matrix4x3fc_): this;
        m12(): number;
        mapnZnXY(arg0: Internal.Matrix4d_): this;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapnYnXnZ(): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotateAffine(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "scale(org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "rotateLocal(org.joml.Quaterniondc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        clone(): any;
        mapXnYnZ(arg0: Internal.Matrix4d_): this;
        mapZnYnX(): this;
        mapnZnYX(): this;
        "normal(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        m23(): number;
        lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4d_): this;
        mul0(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "shadow(double,double,double,double,org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_, arg5: Internal.Matrix4d_): this;
        "set(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        get(arg0: number[]): number[];
        "mul(org.joml.Matrix4x3dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        determinant(): number;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        properties(): number;
        "rotation(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        mulLocalAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        rotateLocal(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        "perspectiveOffCenterFovLH(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        toString(): string;
        translationRotateScaleInvert(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        rotationTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        translationRotateInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_): this;
        "perspective(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        rotateAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mapnZnYnX(): this;
        mapnYnXZ(): this;
        mapZYnX(arg0: Internal.Matrix4d_): this;
        mapnYnXnZ(arg0: Internal.Matrix4d_): this;
        transformProject(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector3d_): Internal.Vector3d;
        orthoCrop(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        setRow(arg0: number, arg1: Internal.Vector4dc_): this;
        "set(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_): this;
        mapnXYnZ(arg0: Internal.Matrix4d_): this;
        mul4x3ComponentWise(arg0: Internal.Matrix4dc_): this;
        "project(org.joml.Vector3dc,int[],org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        get4x3Transposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mapnZnYX(arg0: Internal.Matrix4d_): this;
        mapnXnYnZ(arg0: Internal.Matrix4d_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): this;
        "project(double,double,double,int[],org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        "rotate(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        rotateTowardsXY(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        project(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        "frustum(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapYnZnX(): this;
        "unproject(double,double,double,int[],org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        "mul(org.joml.Matrix3x2dc,org.joml.Matrix4d)"(arg0: Internal.Matrix3x2dc_, arg1: Internal.Matrix4d_): this;
        rotateAroundLocal(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "perspectiveOffCenterFov(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        m10(): number;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "normalize3x3(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        mapYnXnZ(arg0: Internal.Matrix4d_): this;
        "translation(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        setLookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        unprojectInvRay(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector3d_, arg4: Internal.Vector3d_): this;
        rotateLocalZ(arg0: number): this;
        equals(arg0: Internal.Matrix4dc_, arg1: number): boolean;
        mapZXY(): this;
        setPerspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        trapezoidCrop(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        "perspectiveRect(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        mapnYnZnX(): this;
        scaleLocal(arg0: number): this;
        tile(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        m21(): number;
        mulLocal(arg0: Internal.Matrix4dc_): this;
        translationRotateScaleMulAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Internal.Matrix4d_): this;
        perspectiveFar(): number;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        translationRotateScale(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        "getRow(int,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        mapnYnZnX(arg0: Internal.Matrix4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        set4x3(arg0: Internal.Matrix4dc_): this;
        static perspectiveOffCenterViewFromRectangle(arg0: Internal.Vector3d_, arg1: Internal.Vector3d_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_, arg4: number, arg5: boolean, arg6: Internal.Matrix4d_, arg7: Internal.Matrix4d_): void;
        m32(): number;
        reflection(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        scaleXY(arg0: number, arg1: number): this;
        set(arg0: number, arg1: number, arg2: number): this;
        unproject(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        mapZXY(arg0: Internal.Matrix4d_): this;
        "translate(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        mapnZYnX(): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        get(arg0: Internal.Matrix4d_): this;
        transform(arg0: Internal.Vector4d_): Internal.Vector4d;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        "rotateLocal(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        normal(arg0: Internal.Matrix4d_): this;
        origin(arg0: Internal.Vector3d_): Internal.Vector3d;
        "add4x3(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Internal.Matrix4d_): this;
        arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number): this;
        unprojectInv(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        normalize3x3(arg0: Internal.Matrix4d_): this;
        obliqueZ(arg0: number, arg1: number): this;
        "get(double[])"(arg0: number[]): number[];
        mapZXnY(): this;
        mul(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        translation(arg0: number, arg1: number, arg2: number): this;
        get4x3Transposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        invertFrustum(arg0: Internal.Matrix4d_): this;
        "normal(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        set(arg0: Internal.Matrix4x3dc_): this;
        setPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mul4x3ComponentWise(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        sub4x3(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        setFrustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "add4x3(org.joml.Matrix4fc,org.joml.Matrix4d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        rotateAffine(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        mapXZnY(arg0: Internal.Matrix4d_): this;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        rotationY(arg0: number): this;
        mapnZXY(arg0: Internal.Matrix4d_): this;
        mapnYXnZ(arg0: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix3x2dc_): this;
        setFloats(arg0: number, arg1: Internal.ByteBuffer_): this;
        unprojectInv(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        "translationRotateScale(org.joml.Vector3fc,org.joml.Quaternionfc,org.joml.Vector3fc)"(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translateLocal(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        rotateAffineYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "getRow(int,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        mapXnZnY(arg0: Internal.Matrix4d_): this;
        mapZnXnY(): this;
        scaling(arg0: Internal.Vector3dc_): this;
        rotationZYX(arg0: number, arg1: number, arg2: number): this;
        wait(arg0: number): void;
        invertPerspectiveView(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        setTranslation(arg0: Internal.Vector3dc_): this;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        setPerspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.Matrix4d_): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        getColumn(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        m03(): number;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        mapZYX(arg0: Internal.Matrix4d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "rotate(org.joml.AxisAngle4f,org.joml.Matrix4d)"(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4d_): this;
        mapYnZX(arg0: Internal.Matrix4d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        "rotate(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        "transformDirection(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        "transformDirection(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        set(arg0: Internal.Matrix4fc_): this;
        add4x3(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "set(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): this;
        get(arg0: number[], arg1: number): number[];
        rotationAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        "reflect(org.joml.Vector3dc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mulTranslationAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        withLookAtUp(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        "transpose3x3(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        translationRotateScale(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        invertPerspective(arg0: Internal.Matrix4d_): this;
        translationRotateScaleInvert(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        mapnZnXY(): this;
        assume(arg0: number): this;
        transformAffine(arg0: Internal.Vector4d_): Internal.Vector4d;
        "transformDirection(double,double,double,org.joml.Vector3f)"(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        transformProject(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        reflection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        equals(arg0: any): boolean;
        setFromAddress(arg0: number): this;
        scale(arg0: Internal.Vector3dc_): this;
        rotateLocal(arg0: Internal.Quaternionfc_): this;
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        rotationXYZ(arg0: number, arg1: number, arg2: number): this;
        "mul(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniondc_): this;
        mulAffine(arg0: Internal.Matrix4dc_): this;
        rotateLocalZ(arg0: number, arg1: Internal.Matrix4d_): this;
        transformProject(arg0: Internal.Vector3d_): Internal.Vector3d;
        billboardSpherical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapnZXY(): this;
        "set3x3(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        m10(arg0: number): this;
        scaleLocal(arg0: number, arg1: Internal.Matrix4d_): this;
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        get(arg0: number[], arg1: number): number[];
        "unprojectInv(double,double,double,int[],org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        "perspectiveLH(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        mapXZnY(): this;
        mapnXnYZ(arg0: Internal.Matrix4d_): this;
        translate(arg0: number, arg1: number, arg2: number): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        negateY(): this;
        set(arg0: Internal.Matrix4dc_): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        m21(arg0: number): this;
        "rotate(org.joml.AxisAngle4d,org.joml.Matrix4d)"(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix4d_): this;
        mapnYXnZ(): this;
        rotateAffineXYZ(arg0: number, arg1: number, arg2: number): this;
        "mul(org.joml.Matrix3x2dc)"(arg0: Internal.Matrix3x2dc_): this;
        transpose3x3(): this;
        "translationRotateScale(org.joml.Vector3dc,org.joml.Quaterniondc,double)"(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        shadow(arg0: Internal.Vector4dc_, arg1: Internal.Matrix4dc_, arg2: Internal.Matrix4d_): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        transpose3x3(arg0: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        mulOrthoAffine(arg0: Internal.Matrix4dc_): this;
        rotateZYX(arg0: Internal.Vector3d_): this;
        "orthoSymmetricLH(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        lerp(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Matrix4d_): this;
        getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        mul0(arg0: Internal.Matrix4dc_): this;
        getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        m32(arg0: number): this;
        mapYZX(): this;
        transpose(arg0: Internal.Matrix4d_): this;
        transformProject(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        setLookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        "rotation(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        originAffine(arg0: Internal.Vector3d_): Internal.Vector3d;
        lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        mapnZYX(arg0: Internal.Matrix4d_): this;
        cofactor3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        rotateYXZ(arg0: number, arg1: number, arg2: number): this;
        getRow(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        "getColumn(int,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        transpose(): this;
        "set(float[])"(arg0: number[]): this;
        unprojectRay(arg0: Internal.Vector2dc_, arg1: number[], arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        set(arg0: number[]): this;
        normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        mul(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        setLookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        getScale(arg0: Internal.Vector3d_): Internal.Vector3d;
        "unprojectInv(org.joml.Vector3dc,int[],org.joml.Vector4d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        setFrustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "unproject(org.joml.Vector3dc,int[],org.joml.Vector4d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        setPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_): this;
        "set4x3(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_): this;
        mapnZYX(): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnYZnX(arg0: Internal.Matrix4d_): this;
        normal(): this;
        mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4d_): this;
        unproject(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Matrix4x3fc_): this;
        arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "frustumLH(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        transformAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: Internal.Matrix4d_): this;
        mapXZY(arg0: Internal.Matrix4d_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mulAffineR(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "rotateAffine(org.joml.Quaternionfc,org.joml.Matrix4d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mul(arg0: Internal.Matrix3x2fc_): this;
        "set(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        setOrtho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "orthoSymmetric(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        transformPosition(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        mapnYZnX(): this;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "rotateLocal(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        m30(arg0: number): this;
        positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateY(arg0: number, arg1: Internal.Matrix4d_): this;
        mulLocal(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "rotation(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        mapXnZY(): this;
        "transformDirection(double,double,double,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.ByteBuffer_): this;
        rotateLocalY(arg0: number): this;
        lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4d_): this;
        "scaling(double)"(arg0: number): this;
        set(arg0: number[]): this;
        "getUnnormalizedRotation(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        translationRotateScaleInvert(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): this;
        "getTransposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        m20(): number;
        "project(double,double,double,int[],org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Quaterniondc_): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapnZnXnY(arg0: Internal.Matrix4d_): this;
        "rotate(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        withLookAtUp(arg0: number, arg1: number, arg2: number): this;
        "unprojectInv(double,double,double,int[],org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        perspectiveFov(): number;
        "project(org.joml.Vector3dc,int[],org.joml.Vector4d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        rotateY(arg0: number): this;
        positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        m31(): number;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        unprojectInvRay(arg0: Internal.Vector2dc_, arg1: number[], arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        getTranslation(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotate(arg0: Internal.AxisAngle4d_): this;
        getClass(): typeof any;
        rotate(arg0: Internal.Quaterniondc_): this;
        sub(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapZnXnY(arg0: Internal.Matrix4d_): this;
        determineProperties(): this;
        mul(arg0: Internal.Matrix3x2dc_, arg1: Internal.Matrix4d_): this;
        mapXnZnY(): this;
        transformAffine(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        "rotateAffine(org.joml.Quaterniondc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        "mul(org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        m02(arg0: number): this;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        lookAtPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        translateLocal(arg0: number, arg1: number, arg2: number): this;
        "set(float[],int)"(arg0: number[], arg1: number): this;
        mapnXnZY(arg0: Internal.Matrix4d_): this;
        mapnXnYZ(): this;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        translate(arg0: Internal.Vector3dc_): this;
        transform(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        setLookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        mapYnZX(): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "rotateTranslation(org.joml.Quaternionfc,org.joml.Matrix4d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m13(arg0: number): this;
        "shadow(org.joml.Vector4dc,double,double,double,double,org.joml.Matrix4d)"(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4d_): this;
        set(arg0: Internal.AxisAngle4d_): this;
        "translateLocal(org.joml.Vector3fc,org.joml.Matrix4d)"(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        rotation(arg0: number, arg1: Internal.Vector3fc_): this;
        swap(arg0: Internal.Matrix4d_): this;
        negateY(arg0: Internal.Matrix4d_): this;
        "set(double[])"(arg0: number[]): this;
        rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        mapnXnZnY(): this;
        perspectiveFrustumSlice(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        rotate(arg0: Internal.AxisAngle4f_): this;
        getRowColumn(arg0: number, arg1: number): number;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        set(arg0: Internal.Vector4d_, arg1: Internal.Vector4d_, arg2: Internal.Vector4d_, arg3: Internal.Vector4d_): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        transformTranspose(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        project(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): this;
        "translationRotateScaleInvert(org.joml.Vector3fc,org.joml.Quaternionfc,org.joml.Vector3fc)"(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        setPerspective(arg0: number, arg1: number, arg2: number, arg3: number): this;
        setLookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "rotation(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        set(arg0: Internal.AxisAngle4f_): this;
        transformDirection(arg0: Vec3f_): Vec3f;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mulPerspectiveAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "add4x3(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapnZYnX(arg0: Internal.Matrix4d_): this;
        rotateAffineYXZ(arg0: number, arg1: number, arg2: number): this;
        "unproject(org.joml.Vector3dc,int[],org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        "rotateTranslation(org.joml.Quaterniondc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        add(arg0: Internal.Matrix4dc_): this;
        unprojectRay(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector3d_, arg4: Internal.Vector3d_): this;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        transformAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Vector3d_, arg7: Internal.Vector3d_): this;
        transformPosition(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        rotateAroundLocal(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        m00(arg0: number): this;
        mapnXZY(arg0: Internal.Matrix4d_): this;
        get4x3(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        "mul(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        "get4x3Transposed(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mulComponentWise(arg0: Internal.Matrix4dc_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number): this;
        normalize3x3(): this;
        withLookAtUp(arg0: Internal.Vector3dc_): this;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        "translate(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        rotateLocalY(arg0: number, arg1: Internal.Matrix4d_): this;
        transformPosition(arg0: Internal.Vector3d_): Internal.Vector3d;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "translate(org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        m11(arg0: number): this;
        add4x3(arg0: Internal.Matrix4dc_): this;
        scaling(arg0: number): this;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setRotationYXZ(arg0: number, arg1: number, arg2: number): this;
        "orthoLH(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        invertPerspectiveView(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapnXnZY(): this;
        add4x3(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        mulComponentWise(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        translationRotateScaleInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        rotateAffine(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        invertAffine(): this;
        setPerspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number): this;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        get(arg0: number[]): number[];
        toString(arg0: Internal.NumberFormat_): string;
        setFromIntrinsic(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        "transformProject(double,double,double,double,org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        "normalize3x3(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "mul(org.joml.Matrix4f)"(arg0: Matrix4f_): this;
        "orthoLH(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        rotateAffineXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        mulPerspectiveAffine(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        frustumRayDir(arg0: number, arg1: number, arg2: Internal.Vector3d_): Internal.Vector3d;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mapYnXZ(): this;
        m00(): number;
        "unproject(double,double,double,int[],org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        affineSpan(arg0: Internal.Vector3d_, arg1: Internal.Vector3d_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        "transformProject(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        "translate(org.joml.Vector3fc,org.joml.Matrix4d)"(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        mapYnXZ(arg0: Internal.Matrix4d_): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        notifyAll(): void;
        mapnXZnY(): this;
        add4x3(arg0: Internal.Matrix4fc_): this;
        setTransposed(arg0: Internal.Matrix4dc_): this;
        transformTranspose(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        transformDirection(arg0: Internal.Vector3d_): Internal.Vector3d;
        m11(): number;
        determinantAffine(): number;
        transformDirection(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): this;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "set(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): this;
        fma4x3(arg0: Internal.Matrix4dc_, arg1: number): this;
        m22(): number;
        translationRotateInvert(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        "reflect(org.joml.Quaterniondc,org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        set(arg0: Internal.Quaternionfc_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "cofactor3x3(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        "perspectiveOffCenter(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        "mul(org.joml.Matrix4fc,org.joml.Matrix4d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        "perspective(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "getTransposed(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "ortho(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "transformDirection(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        setPerspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        "rotation(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        m33(): number;
        mapYXZ(): this;
        "get(float[],int)"(arg0: number[], arg1: number): number[];
        "getTransposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        transformDirection(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        testPoint(arg0: number, arg1: number, arg2: number): boolean;
        scaling(arg0: number, arg1: number, arg2: number): this;
        project(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        lookAtPerspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        wait(arg0: number, arg1: number): void;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        frustumPlane(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        "transformProject(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        translate(arg0: Internal.Vector3fc_): this;
        frustumCorner(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "transformDirection(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        setPerspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mulAffineR(arg0: Internal.Matrix4dc_): this;
        transformProject(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        mulAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "getUnnormalizedRotation(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        "get(int,int)"(arg0: number, arg1: number): number;
        "mul(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_): this;
        set3x3(arg0: Internal.Matrix3dc_): this;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        transform(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        "set(double[],int)"(arg0: number[], arg1: number): this;
        mapZXnY(arg0: Internal.Matrix4d_): this;
        set "(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_)
        get finite(): boolean
        set floats(arg0: Internal.ByteBuffer_)
        set "(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_)
        set "(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_)
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set "(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_)
        set "(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_)
        get affine(): boolean
        set "(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_)
        set "(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_)
        set "(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_)
        set translation(arg0: Internal.Vector3dc_)
        set "(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_)
        set fromAddress(arg0: number)
        set "(float[])"(arg0: number[])
        set "(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_)
        get class(): typeof any
        set "(double[])"(arg0: number[])
        set transposed(arg0: Internal.Matrix4dc_)
    }
    type Matrix4d_ = Matrix4d;
    interface LongFunction <R> {
        abstract apply(arg0: number): R;
        (arg0: number): R;
    }
    type LongFunction_<R> = ((arg0: number)=> R) | LongFunction<R>;
    interface Saddleable {
        getSaddleSoundEvent(): Internal.SoundEvent;
        abstract equipSaddle(arg0: Internal.SoundSource_): void;
        abstract isSaddled(): boolean;
        abstract isSaddleable(): boolean;
        get saddleSoundEvent(): Internal.SoundEvent
        get saddled(): boolean
        get saddleable(): boolean
    }
    type Saddleable_ = Saddleable;
    class DataPackConfig {
        constructor(arg0: Internal.List_<string>, arg1: Internal.List_<string>)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        getEnabled(): Internal.List<string>;
        wait(arg0: number): void;
        addModPacks(arg0: Internal.List_<string>): void;
        getDisabled(): Internal.List<string>;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get enabled(): Internal.List<string>
        get disabled(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.DataPackConfig>;
        static readonly DEFAULT: (Internal.DataPackConfig) & (Internal.DataPackConfig);
    }
    type DataPackConfig_ = DataPackConfig;
    class Month extends Internal.Enum<Internal.Month> implements Internal.TemporalAccessor, Internal.TemporalAdjuster {
        static of(arg0: number): Internal.Month;
        getClass(): typeof any;
        "compareTo(java.time.Month)"(arg0: Internal.Month_): number;
        static values(): Internal.Month[];
        minLength(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        minus(arg0: number): this;
        compareTo(arg0: any): number;
        length(arg0: boolean): number;
        static from(arg0: Internal.TemporalAccessor_): Internal.Month;
        compareTo(arg0: Internal.Month_): number;
        getLong(arg0: Internal.TemporalField_): number;
        firstMonthOfQuarter(): this;
        getValue(): number;
        isSupported(arg0: Internal.TemporalField_): boolean;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        notifyAll(): void;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        getDisplayName(arg0: Internal.TextStyle_, arg1: Internal.Locale_): string;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        name(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Month>>;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.Month;
        get(arg0: Internal.TemporalField_): number;
        plus(arg0: number): this;
        ordinal(): number;
        wait(): void;
        firstDayOfYear(arg0: boolean): number;
        wait(arg0: number): void;
        maxLength(): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static valueOf(arg0: string): Internal.Month;
        get class(): typeof any
        get value(): number
        get declaringClass(): typeof Internal.Month
        static readonly JANUARY: (Internal.Month) & (Internal.Month);
        static readonly JUNE: (Internal.Month) & (Internal.Month);
        static readonly FEBRUARY: (Internal.Month) & (Internal.Month);
        static readonly APRIL: (Internal.Month) & (Internal.Month);
        static readonly MAY: (Internal.Month) & (Internal.Month);
        static readonly MARCH: (Internal.Month) & (Internal.Month);
        static readonly AUGUST: (Internal.Month) & (Internal.Month);
        static readonly OCTOBER: (Internal.Month) & (Internal.Month);
        static readonly JULY: (Internal.Month) & (Internal.Month);
        static readonly SEPTEMBER: (Internal.Month) & (Internal.Month);
        static readonly NOVEMBER: (Internal.Month) & (Internal.Month);
        static readonly DECEMBER: (Internal.Month) & (Internal.Month);
    }
    type Month_ = "march" | "april" | "september" | "may" | "june" | "august" | Month | "december" | "january" | "july" | "october" | "february" | "november";
    class ProtectedBlockProcessor extends Internal.StructureProcessor {
        constructor(arg0: Internal.TagKey_<Internal.Block>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        processEntity(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.StructureTemplate$StructureEntityInfo_, arg3: Internal.StructureTemplate$StructureEntityInfo_, arg4: Internal.StructurePlaceSettings_, arg5: Internal.StructureTemplate_): Internal.StructureTemplate$StructureEntityInfo;
        wait(): void;
        process(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructureTemplate$StructureBlockInfo_, arg4: Internal.StructureTemplate$StructureBlockInfo_, arg5: Internal.StructurePlaceSettings_, arg6: Internal.StructureTemplate_): Internal.StructureTemplate$StructureBlockInfo;
        wait(arg0: number): void;
        processBlock(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructureTemplate$StructureBlockInfo_, arg4: Internal.StructureTemplate$StructureBlockInfo_, arg5: Internal.StructurePlaceSettings_): Internal.StructureTemplate$StructureBlockInfo;
        finalizeProcessing(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, arg4: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, arg5: Internal.StructurePlaceSettings_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.ProtectedBlockProcessor>;
        readonly cannotReplace: Internal.TagKey<Internal.Block>;
    }
    type ProtectedBlockProcessor_ = ProtectedBlockProcessor;
    class RecipeTypeFunction extends Internal.BaseFunction implements Internal.WrappedJS {
        constructor(event: Internal.RecipesEventJS_, schemaType: Internal.RecipeSchemaType_)
        preventExtensions(): void;
        static getFunctionPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        setImmunePrototypeProperty(value: any): void;
        static getArrayPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        static putProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, value: any, cx: Internal.Context_): void;
        "get(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_): any;
        static putProperty(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,int,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, value: any, cx: Internal.Context_): void;
        abstract get(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): any;
        abstract setParentScope(arg0: Internal.Scriptable_): void;
        "setAttributes(dev.latvian.mods.rhino.Context,int,int)"(cx: Internal.Context_, index: number, attributes: number): void;
        "put(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_, value: any): void;
        getTypeOf(): Internal.MemberType;
        abstract getIds(arg0: Internal.Context_): any[];
        defineOwnProperties(cx: Internal.Context_, props: Internal.ScriptableObject_): void;
        static getTopScopeValue(scope: Internal.Scriptable_, key: any, cx: Internal.Context_): any;
        static deleteProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        "delete(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol)"(cx: Internal.Context_, key: Internal.Symbol_): void;
        setAttributes(cx: Internal.Context_, name: string, attributes: number): void;
        associateValue(key: any, value: any): any;
        abstract getParentScope(): Internal.Scriptable;
        setAttributes(cx: Internal.Context_, key: Internal.Symbol_, attributes: number): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, cx: Internal.Context_): void;
        "delete(dev.latvian.mods.rhino.Context,java.lang.String)"(cx: Internal.Context_, name: string): void;
        getLength(): number;
        avoidObjectDetection(): boolean;
        static getClassPrototype(scope: Internal.Scriptable_, className: string, cx: Internal.Context_): Internal.Scriptable;
        put(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        createRecipe(args: any[]): Internal.RecipeJS;
        static getProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): any;
        getClass(): typeof any;
        static hasProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        abstract "delete(dev.latvian.mods.rhino.Context,int)"(arg0: Internal.Context_, arg1: number): void;
        call(arg0: Internal.Context_, arg1: Internal.Scriptable_, arg2: Internal.Scriptable_, arg3: any[]): any;
        hasInstance(cx: Internal.Context_, instance: Internal.Scriptable_): boolean;
        getExternalArrayData(): Internal.ExternalArrayData;
        abstract put(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_, arg3: any): void;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): any;
        "defineProperty(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,java.lang.Object,int)"(cx: Internal.Context_, key: Internal.Symbol_, value: any, attributes: number): void;
        "initPrototypeMethod(java.lang.Object,int,java.lang.String,java.lang.String,int,dev.latvian.mods.rhino.Context)"(tag: any, id: number, propertyName: string, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        static defineConstProperty(destination: Internal.Scriptable_, propertyName: string, cx: Internal.Context_): void;
        sealObject(cx: Internal.Context_): void;
        initPrototypeMethod(tag: any, id: number, name: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        abstract has(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): boolean;
        createObject(cx: Internal.Context_, scope: Internal.Scriptable_): Internal.Scriptable;
        static deleteProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        "get(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): any;
        "initPrototypeValue(int,dev.latvian.mods.rhino.Symbol,java.lang.Object,int)"(id: number, key: Internal.Symbol_, value: any, attributes: number): void;
        static defineProperty(destination: Internal.Scriptable_, propertyName: string, value: any, attributes: number, cx: Internal.Context_): void;
        getAttributes(cx: Internal.Context_, index: number): number;
        static "deleteProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        getArity(): number;
        toString(): string;
        notifyAll(): void;
        "initPrototypeValue(int,java.lang.String,java.lang.Object,int)"(id: number, name: string, value: any, attributes: number): void;
        setGetterOrSetter(cx: Internal.Context_, name: string, index: number, getterOrSetter: dev.latvian.mods.rhino.Callable_, isSetter: boolean): void;
        enumerationIteratorNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, sealed: boolean, mapInheritance: boolean, cx: Internal.Context_): string;
        has(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): boolean;
        static getProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): any;
        size(): number;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        execIdCall(f: Internal.IdFunctionObject_, cx: Internal.Context_, scope: Internal.Scriptable_, thisObj: Internal.Scriptable_, args: any[]): any;
        static getObjectPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        wait(arg0: number): void;
        construct(cx: Internal.Context_, scope: Internal.Scriptable_, args: any[]): Internal.Scriptable;
        initPrototypeValue(id: number, key: Internal.Symbol_, value: any, attributes: number): void;
        defineProperty(cx: Internal.Context_, propertyName: string, value: any, attributes: number): void;
        initPrototypeValue(id: number, name: string, value: any, attributes: number): void;
        setAttributes(cx: Internal.Context_, index: number, attributes: number): void;
        putConst(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): any;
        defineProperty(cx: Internal.Context_, propertyName: string, delegateTo: any, getter: Internal.WrappedExecutable_, setter: Internal.WrappedExecutable_, attributes: number): void;
        getClassName(): string;
        defineFunctionProperties(cx: Internal.Context_, names: string[], clazz: typeof any, attributes: number): void;
        "delete"(cx: Internal.Context_, name: string): void;
        static putProperty(obj: Internal.Scriptable_, index: number, value: any, cx: Internal.Context_): void;
        abstract "delete"(arg0: Internal.Context_, arg1: number): void;
        "initPrototypeMethod(java.lang.Object,int,dev.latvian.mods.rhino.Symbol,java.lang.String,int,dev.latvian.mods.rhino.Context)"(tag: any, id: number, key: Internal.Symbol_, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        static getGeneratorFunctionPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        "put(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, sealed: boolean, cx: Internal.Context_): void;
        notify(): void;
        initPrototypeMethod(tag: any, id: number, propertyName: string, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        static putConstProperty(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        hasPrototypeMap(): boolean;
        static redefineProperty(obj: Internal.Scriptable_, name: string, isConst: boolean, cx: Internal.Context_): void;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, value: any, cx: Internal.Context_): void;
        get(cx: Internal.Context_, key: any): any;
        get(cx: Internal.Context_, name: string, start: Internal.Scriptable_): any;
        abstract getPrototype(arg0: Internal.Context_): Internal.Scriptable;
        static getDefaultValue(object: Internal.Scriptable_, typeHint: typeof any, cx: Internal.Context_): any;
        abstract "put(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_, arg3: any): void;
        enumerationIteratorHasNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): any;
        abstract "has(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): boolean;
        isConst(name: string): boolean;
        getAttributes(cx: Internal.Context_, key: Internal.Symbol_): number;
        initPrototypeConstructor(f: Internal.IdFunctionObject_, cx: Internal.Context_): void;
        static "deleteProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        "getAttributes(dev.latvian.mods.rhino.Context,int)"(cx: Internal.Context_, index: number): number;
        isExtensible(): boolean;
        wait(): void;
        abstract setPrototype(arg0: Internal.Scriptable_): void;
        getGetterOrSetter(name: string, index: number, isSetter: boolean): any;
        getAttributes(cx: Internal.Context_, name: string): number;
        activatePrototypeMap(maxPrototypeId: number): void;
        static getPropertyIds(cx: Internal.Context_, obj: Internal.Scriptable_): any[];
        defineProperty(cx: Internal.Context_, key: Internal.Symbol_, value: any, attributes: number): void;
        getAssociatedValue(key: any): any;
        "defineProperty(dev.latvian.mods.rhino.Context,java.lang.String,java.lang.Object,int)"(cx: Internal.Context_, propertyName: string, value: any, attributes: number): void;
        "delete"(cx: Internal.Context_, key: Internal.Symbol_): void;
        initPrototypeMethod(tag: any, id: number, key: Internal.Symbol_, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        static getProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): any;
        "has(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_): boolean;
        isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        has(cx: Internal.Context_, name: string, start: Internal.Scriptable_): boolean;
        defineConst(cx: Internal.Context_, name: string, start: Internal.Scriptable_): void;
        "defineProperty(dev.latvian.mods.rhino.Context,java.lang.String,java.lang.Class,int)"(cx: Internal.Context_, propertyName: string, clazz: typeof any, attributes: number): void;
        defineOwnProperty(cx: Internal.Context_, key: any, desc: Internal.ScriptableObject_): void;
        getFunctionName(): string;
        abstract getDefaultValue(arg0: Internal.Context_, arg1: typeof any): any;
        setExternalArrayData(cx: Internal.Context_, array: Internal.ExternalArrayData_): void;
        "getAttributes(dev.latvian.mods.rhino.Context,java.lang.String)"(cx: Internal.Context_, name: string): number;
        get(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): any;
        static hasProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): boolean;
        getMod(): string;
        "setAttributes(dev.latvian.mods.rhino.Context,java.lang.String,int)"(cx: Internal.Context_, name: string, attributes: number): void;
        isSealed(cx: Internal.Context_): boolean;
        getAllIds(cx: Internal.Context_): any[];
        "has(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): boolean;
        defineProperty(cx: Internal.Context_, propertyName: string, clazz: typeof any, attributes: number): void;
        static hasProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        exportAsJSClass(maxPrototypeId: number, scope: Internal.Scriptable_, sealed: boolean, cx: Internal.Context_): Internal.IdFunctionObject;
        abstract "get(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): any;
        "setAttributes(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,int)"(cx: Internal.Context_, key: Internal.Symbol_, attributes: number): void;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): boolean;
        hashCode(): number;
        getExternalArrayLength(): any;
        "getAttributes(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol)"(cx: Internal.Context_, key: Internal.Symbol_): number;
        static getTopLevelScope(obj: Internal.Scriptable_): Internal.Scriptable;
        equals(obj: any): boolean;
        put(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_, value: any): void;
        set immunePrototypeProperty(value: any)
        set parentScope(arg0: Internal.Scriptable_)
        get typeOf(): Internal.MemberType
        get parentScope(): Internal.Scriptable
        get length(): number
        get class(): typeof any
        get externalArrayData(): Internal.ExternalArrayData
        get arity(): number
        get className(): string
        get extensible(): boolean
        set prototype(arg0: Internal.Scriptable_)
        get empty(): boolean
        get functionName(): string
        get mod(): string
        get externalArrayLength(): any
        readonly schemaType: Internal.RecipeSchemaType;
        static readonly SKIP_ERROR: (Internal.Pattern) & (Internal.Pattern);
        readonly id: ResourceLocation;
        readonly idString: string;
        readonly event: Internal.RecipesEventJS;
    }
    type RecipeTypeFunction_ = RecipeTypeFunction;
    interface Vector4dc {
        abstract "fma(org.joml.Vector4dc,org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract "get(int)"(arg0: number): number;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract normalize(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract negate(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract sub(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract mul(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract angleCos(arg0: Internal.Vector4dc_): number;
        abstract "sub(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract getToAddress(arg0: number): this;
        abstract equals(arg0: Internal.Vector4dc_, arg1: number): boolean;
        abstract "mul(org.joml.Matrix4fc,org.joml.Vector4d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract x(): number;
        abstract div(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract min(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        abstract "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract normalize(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract dot(arg0: number, arg1: number, arg2: number, arg3: number): number;
        abstract distanceSquared(arg0: Internal.Vector4dc_): number;
        abstract mulAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract floor(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract mulAdd(arg0: number, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        abstract "mul(double,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract "mulAdd(org.joml.Vector4dc,org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract "mul(org.joml.Matrix4dc,org.joml.Vector4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract maxComponent(): number;
        abstract getf(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract "mul(org.joml.Vector4fc,org.joml.Vector4d)"(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract distance(arg0: Internal.Vector4dc_): number;
        abstract sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        abstract "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract get(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract angle(arg0: Internal.Vector4dc_): number;
        abstract "get(int,org.joml.Vector4i)"(arg0: number, arg1: Internal.Vector4i_): Internal.Vector4i;
        abstract "mulProject(org.joml.Matrix4dc,org.joml.Vector4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract get(arg0: number): number;
        abstract y(): number;
        abstract lengthSquared(): number;
        abstract absolute(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract mulAffineTranspose(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract "mul(org.joml.Matrix4x3fc,org.joml.Vector4d)"(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract dot(arg0: Internal.Vector4dc_): number;
        abstract round(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract mul(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract rotateX(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract "get(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "sub(org.joml.Vector4fc,org.joml.Vector4d)"(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        abstract hermite(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4dc_, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        abstract "get(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract get(arg0: number, arg1: Internal.Vector4i_): Internal.Vector4i;
        abstract distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        abstract "div(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        abstract z(): number;
        abstract isFinite(): boolean;
        abstract "div(double,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract get(arg0: Vec4f_): Vec4f;
        abstract fma(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract "add(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract ceil(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "mulAdd(double,org.joml.Vector4dc,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract mul(arg0: Internal.Matrix4fc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract "add(org.joml.Vector4fc,org.joml.Vector4d)"(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract "mulProject(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulTranspose(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract rotateY(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract length(): number;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mulProject(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract minComponent(): number;
        abstract add(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract normalize3(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract smoothStep(arg0: Internal.Vector4dc_, arg1: number, arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract max(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract "fma(double,org.joml.Vector4dc,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract mul(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract lerp(arg0: Internal.Vector4dc_, arg1: number, arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract fma(arg0: number, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract getf(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract "mul(org.joml.Matrix4x3dc,org.joml.Vector4d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract mulProject(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract sub(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract mul(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract div(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract w(): number;
        abstract mul(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract "mul(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract rotateZ(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract mulAdd(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract add(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        get finite(): boolean
    }
    type Vector4dc_ = Vector4dc;
    class LayerDefinition {
        getClass(): typeof any;
        hashCode(): number;
        bakeRoot(): Internal.ModelPart;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        static create(arg0: Internal.MeshDefinition_, arg1: number, arg2: number): Internal.LayerDefinition;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type LayerDefinition_ = LayerDefinition;
    class DropExperienceBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.IntProvider_)
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getDescriptionId(): string;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getSpeedFactor(): number;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Player_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getRenderPropertiesInternal(): any;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        setSpeedFactor(arg0: number): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        getFriction(): number;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        wait(arg0: number): void;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        notify(): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        setDestroySpeed(v: number): void;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        wait(): void;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        setIsRandomlyTicking(arg0: boolean): void;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static stateById(arg0: number): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        equals(arg0: any): boolean;
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get descriptionId(): string
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get jumpFactor(): number
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set destroySpeed(v: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get name(): Internal.MutableComponent
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get mod(): string
        set soundType(arg0: SoundType_)
        set hasCollision(arg0: boolean)
    }
    type DropExperienceBlock_ = DropExperienceBlock;
    class ClientboundChunksBiomesPacket$ChunkBiomeData extends Internal.Record {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.LevelChunk_)
        constructor(arg0: Internal.ChunkPos_, arg1: number[])
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        getReadBuffer(): Internal.FriendlyByteBuf;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static extractChunkData(arg0: Internal.FriendlyByteBuf_, arg1: Internal.LevelChunk_): void;
        hashCode(): number;
        buffer(): number[];
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        pos(): Internal.ChunkPos;
        get class(): typeof any
        get readBuffer(): Internal.FriendlyByteBuf
    }
    type ClientboundChunksBiomesPacket$ChunkBiomeData_ = ClientboundChunksBiomesPacket$ChunkBiomeData;
    class WeightedStateProvider extends Internal.BlockStateProvider {
        constructor(arg0: any_<Internal.BlockState>)
        constructor(arg0: any_<Internal.BlockState>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static simple(arg0: Internal.Block_): Internal.SimpleStateProvider;
        hashCode(): number;
        static simple(arg0: Internal.BlockState_): Internal.SimpleStateProvider;
        wait(): void;
        static "simple(net.minecraft.world.level.block.state.BlockState)"(arg0: Internal.BlockState_): Internal.SimpleStateProvider;
        wait(arg0: number): void;
        getState(arg0: Internal.RandomSource_, arg1: BlockPos_): Internal.BlockState;
        equals(arg0: any): boolean;
        static "simple(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): Internal.SimpleStateProvider;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.WeightedStateProvider>;
    }
    type WeightedStateProvider_ = WeightedStateProvider;
    abstract class ContentHandler {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        abstract getContent(arg0: Internal.URLConnection_): any;
        getContent(arg0: Internal.URLConnection_, arg1: typeof any[]): any;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type ContentHandler_ = ContentHandler;
    class StructureBlockEntity extends Internal.BlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        getSeed(): number;
        requestModelDataUpdate(): void;
        hasStructureName(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        getStructureName(): string;
        isStructureLoadable(): boolean;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        getMetaData(): string;
        getMode(): Internal.StructureMode;
        saveWithoutMetadata(): Internal.CompoundTag;
        getStructureSize(): Vec3i;
        setRemoved(): void;
        setSeed(arg0: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getType(): Internal.BlockEntityType<any>;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        saveStructure(arg0: boolean): boolean;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        setStructurePos(arg0: BlockPos_): void;
        setMode(arg0: Internal.StructureMode_): void;
        clearRemoved(): void;
        setShowBoundingBox(arg0: boolean): void;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        getStructurePath(): string;
        setIgnoreEntities(arg0: boolean): void;
        getPersistentData(): Internal.CompoundTag;
        setMetaData(arg0: string): void;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        setStructureSize(arg0: Vec3i_): void;
        wait(arg0: number): void;
        reviveCaps(): void;
        getStructurePos(): BlockPos;
        getShowBoundingBox(): boolean;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        loadStructure(arg0: Internal.ServerLevel_, arg1: boolean, arg2: Internal.StructureTemplate_): boolean;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        loadStructure(arg0: Internal.ServerLevel_, arg1: boolean): boolean;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        isPowered(): boolean;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        usedBy(arg0: Player_): boolean;
        "setStructureName(java.lang.String)"(arg0: string): void;
        getRotation(): Internal.Rotation;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        setStructureName(arg0: string): void;
        setPowered(arg0: boolean): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setRotation(arg0: Internal.Rotation_): void;
        static createRandom(arg0: number): Internal.RandomSource;
        createdBy(arg0: Internal.LivingEntity_): void;
        setIntegrity(arg0: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        loadStructure(arg0: Internal.ServerLevel_): boolean;
        saveWithId(): Internal.CompoundTag;
        detectSize(): boolean;
        "setStructureName(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        getMirror(): Internal.Mirror;
        onlyOpCanSetNbt(): boolean;
        getIntegrity(): number;
        setShowAir(arg0: boolean): void;
        saveStructure(): boolean;
        unloadStructure(): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        isIgnoreEntities(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        serializeNBT(): Internal.CompoundTag;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getModelData(): Internal.ModelData;
        getShowAir(): boolean;
        equals(arg0: any): boolean;
        setStructureName(arg0: ResourceLocation_): void;
        setMirror(arg0: Internal.Mirror_): void;
        get seed(): number
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get structureName(): string
        get structureLoadable(): boolean
        get metaData(): string
        get mode(): Internal.StructureMode
        get structureSize(): Vec3i
        set seed(arg0: number)
        get type(): Internal.BlockEntityType<any>
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        set structurePos(arg0: BlockPos_)
        set mode(arg0: Internal.StructureMode_)
        set showBoundingBox(arg0: boolean)
        get updatePacket(): Internal.Packet<any>
        get structurePath(): string
        set ignoreEntities(arg0: boolean)
        get persistentData(): Internal.CompoundTag
        set metaData(arg0: string)
        set structureSize(arg0: Vec3i_)
        get structurePos(): BlockPos
        get showBoundingBox(): boolean
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get powered(): boolean
        get blockState(): Internal.BlockState
        set "structureName(java.lang.String)"(arg0: string)
        get rotation(): Internal.Rotation
        set structureName(arg0: string)
        set powered(arg0: boolean)
        set rotation(arg0: Internal.Rotation_)
        set integrity(arg0: number)
        set "structureName(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_)
        get level(): Internal.Level
        get mirror(): Internal.Mirror
        get integrity(): number
        set showAir(arg0: boolean)
        get ignoreEntities(): boolean
        get modelData(): Internal.ModelData
        get showAir(): boolean
        set structureName(arg0: ResourceLocation_)
        set mirror(arg0: Internal.Mirror_)
        static readonly MAX_OFFSET_PER_AXIS: (48) & (number);
        static readonly MAX_SIZE_PER_AXIS: (48) & (number);
        static readonly AUTHOR_TAG: ("author") & (string);
    }
    type StructureBlockEntity_ = StructureBlockEntity;
    class ViewportEvent$ComputeCameraAngles extends Internal.ViewportEvent {
        constructor()
        constructor(arg0: Internal.GameRenderer_, arg1: Internal.Camera_, arg2: number, arg3: number, arg4: number, arg5: number)
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        setPhase(arg0: Internal.EventPriority_): void;
        getRenderer(): Internal.GameRenderer;
        setYaw(arg0: number): void;
        getCamera(): Internal.Camera;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getRoll(): number;
        isCancelable(): boolean;
        setPitch(arg0: number): void;
        getPitch(): number;
        getListenerList(): Internal.ListenerList;
        getPartialTick(): number;
        getResult(): Internal.Event$Result;
        toString(): string;
        notifyAll(): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        wait(): void;
        getYaw(): number;
        setRoll(arg0: number): void;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get renderer(): Internal.GameRenderer
        set yaw(arg0: number)
        get camera(): Internal.Camera
        get canceled(): boolean
        get roll(): number
        get cancelable(): boolean
        set pitch(arg0: number)
        get pitch(): number
        get listenerList(): Internal.ListenerList
        get partialTick(): number
        get result(): Internal.Event$Result
        set result(arg0: Internal.Event$Result_)
        get yaw(): number
        set roll(arg0: number)
        get phase(): Internal.EventPriority
    }
    type ViewportEvent$ComputeCameraAngles_ = ViewportEvent$ComputeCameraAngles;
    class PalettedContainer$Configuration <T> extends Internal.Record {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        bits(): number;
        equals(arg0: any): boolean;
        factory(): Internal.Palette$Factory;
        createData(arg0: Internal.IdMap_<T>, arg1: Internal.PaletteResize_<T>, arg2: number): Internal.PalettedContainer$Data<T>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type PalettedContainer$Configuration_<T> = PalettedContainer$Configuration<T>;
    interface IMultihandWeapon {
    }
    type IMultihandWeapon_ = IMultihandWeapon;
    class SugarCaneBlock extends Internal.Block implements Internal.IPlantable {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly AGE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type SugarCaneBlock_ = SugarCaneBlock;
    interface Float2CharFunction extends it.unimi.dsi.fastutil.Function<number, string>, Internal.DoubleToIntFunction {
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Float2IntFunction;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Float2ObjectFunction<T>;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2CharFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: string): string;
        abstract "get(float)"(arg0: number): string;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Character)"(arg0: any, arg1: string): string;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2CharFunction;
        put(arg0: number, arg1: string): string;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        remove(arg0: any): string;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): string;
        "containsKey(float)"(arg0: number): boolean;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Float2ShortFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2CharFunction<T>;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2CharFunction;
        "remove(float)"(arg0: number): string;
        getOrDefault(arg0: number, arg1: string): string;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Float2LongFunction;
        abstract get(arg0: number): string;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Float2DoubleFunction;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): string;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, string>;
        "getOrDefault(float,char)"(arg0: number, arg1: string): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        defaultReturnValue(): string;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2CharFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        defaultReturnValue(arg0: string): void;
        /**
         * @deprecated
        */
        get(arg0: any): string;
        containsKey(arg0: number): boolean;
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2CharFunction;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Float2ByteFunction;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Float2ReferenceFunction<T>;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2CharFunction;
        apply(arg0: number): string;
        remove(arg0: number): string;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<number, T>;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        size(): number;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Float2FloatFunction;
        clear(): void;
        /**
         * @deprecated
        */
        "put(java.lang.Float,java.lang.Character)"(arg0: number, arg1: string): string;
        "put(float,char)"(arg0: number, arg1: string): string;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2CharFunction;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
    }
    type Float2CharFunction_ = Float2CharFunction;
    class BlendingData {
        getClass(): typeof any;
        static sideByGenerationAge(arg0: Internal.WorldGenLevel_, arg1: number, arg2: number, arg3: boolean): Internal.Set<Internal.Direction8>;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getAreaWithOldGeneration(): Internal.LevelHeightAccessor;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static getOrUpdateBlendingData(arg0: Internal.WorldGenRegion_, arg1: number, arg2: number): Internal.BlendingData;
        get class(): typeof any
        get areaWithOldGeneration(): Internal.LevelHeightAccessor
        static readonly CODEC: Internal.Codec<Internal.BlendingData>;
    }
    type BlendingData_ = BlendingData;
    class GameProfile {
        constructor(arg0: Internal.UUID_, arg1: string)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        isLegacy(): boolean;
        isComplete(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        getName(): string;
        getId(): Internal.UUID;
        wait(arg0: number): void;
        getProperties(): Internal.PropertyMap;
        equals(arg0: any): boolean;
        get class(): typeof any
        get legacy(): boolean
        get complete(): boolean
        get name(): string
        get id(): Internal.UUID
        get properties(): Internal.PropertyMap
    }
    type GameProfile_ = GameProfile;
    class Connection extends Internal.SimpleChannelInboundHandler<Internal.Packet<any>> {
        constructor(arg0: Internal.PacketFlow_)
        channelActive(arg0: Internal.ChannelHandlerContext_): void;
        isMemoryConnection(): boolean;
        handleDisconnection(): void;
        notify(): void;
        setListener(arg0: Internal.PacketListener_): void;
        getAverageReceivedPackets(): number;
        getPacketListener(): Internal.PacketListener;
        userEventTriggered(arg0: Internal.ChannelHandlerContext_, arg1: any): void;
        handlerAdded(arg0: Internal.ChannelHandlerContext_): void;
        isConnected(): boolean;
        send(arg0: Internal.Packet_<any>, arg1: Internal.PacketSendListener_): void;
        setupCompression(arg0: number, arg1: boolean): void;
        isEncrypted(): boolean;
        isSharable(): boolean;
        getDirection(): Internal.PacketFlow;
        getAverageSentPackets(): number;
        handlerRemoved(arg0: Internal.ChannelHandlerContext_): void;
        static configureSerialization(arg0: Internal.ChannelPipeline_, arg1: Internal.PacketFlow_): void;
        tick(): void;
        getRemoteAddress(): Internal.SocketAddress;
        channelInactive(arg0: Internal.ChannelHandlerContext_): void;
        setReadOnly(): void;
        wait(): void;
        channelUnregistered(arg0: Internal.ChannelHandlerContext_): void;
        getSending(): Internal.PacketFlow;
        channelRegistered(arg0: Internal.ChannelHandlerContext_): void;
        getClass(): typeof any;
        static connectToLocalServer(arg0: Internal.SocketAddress_): Internal.Connection;
        acceptInboundMessage(arg0: any): boolean;
        static connectToServer(arg0: Internal.InetSocketAddress_, arg1: boolean): Internal.Connection;
        setProtocol(arg0: Internal.ConnectionProtocol_): void;
        wait(arg0: number, arg1: number): void;
        channelWritabilityChanged(arg0: Internal.ChannelHandlerContext_): void;
        setEncryptionKey(arg0: Internal.Cipher_, arg1: Internal.Cipher_): void;
        isConnecting(): boolean;
        channelRead(arg0: Internal.ChannelHandlerContext_, arg1: any): void;
        disconnect(arg0: Internal.Component_): void;
        getDisconnectedReason(): Internal.Component;
        toString(): string;
        notifyAll(): void;
        channelReadComplete(arg0: Internal.ChannelHandlerContext_): void;
        channel(): io.netty.channel.Channel;
        static connect(arg0: Internal.InetSocketAddress_, arg1: boolean, arg2: Internal.Connection_): Internal.ChannelFuture;
        hashCode(): number;
        getReceiving(): Internal.PacketFlow;
        wait(arg0: number): void;
        exceptionCaught(arg0: Internal.ChannelHandlerContext_, arg1: Internal.Throwable_): void;
        equals(arg0: any): boolean;
        send(arg0: Internal.Packet_<any>): void;
        get memoryConnection(): boolean
        set listener(arg0: Internal.PacketListener_)
        get averageReceivedPackets(): number
        get packetListener(): Internal.PacketListener
        get connected(): boolean
        get encrypted(): boolean
        get sharable(): boolean
        get direction(): Internal.PacketFlow
        get averageSentPackets(): number
        get remoteAddress(): Internal.SocketAddress
        get sending(): Internal.PacketFlow
        get class(): typeof any
        set protocol(arg0: Internal.ConnectionProtocol_)
        get connecting(): boolean
        get disconnectedReason(): Internal.Component
        get receiving(): Internal.PacketFlow
        static readonly PACKET_MARKER: (Internal.Log4jMarker) & (org.slf4j.Marker);
        static readonly LOCAL_WORKER_GROUP: Internal.LazyLoadedValue<Internal.DefaultEventLoopGroup>;
        static readonly NETWORK_EPOLL_WORKER_GROUP: Internal.LazyLoadedValue<Internal.EpollEventLoopGroup>;
        static readonly PACKET_SENT_MARKER: (Internal.Log4jMarker) & (org.slf4j.Marker);
        static readonly ATTRIBUTE_PROTOCOL: Internal.AttributeKey<Internal.ConnectionProtocol>;
        static readonly PACKET_RECEIVED_MARKER: (Internal.Log4jMarker) & (org.slf4j.Marker);
        static readonly ROOT_MARKER: (Internal.Log4jMarker) & (org.slf4j.Marker);
        static readonly NETWORK_WORKER_GROUP: Internal.LazyLoadedValue<Internal.NioEventLoopGroup>;
    }
    type Connection_ = Connection;
    class ServerboundResourcePackPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.ServerboundResourcePackPacket$Action_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getAction(): Internal.ServerboundResourcePackPacket$Action;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get action(): Internal.ServerboundResourcePackPacket$Action
    }
    type ServerboundResourcePackPacket_ = ServerboundResourcePackPacket;
    class FireworksJS$Explosion {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        readonly fadeColors: Internal.IntOpenHashSet;
        trail: boolean;
        flicker: boolean;
        readonly colors: Internal.IntOpenHashSet;
        shape: Internal.FireworksJS$Shape;
    }
    type FireworksJS$Explosion_ = FireworksJS$Explosion;
    /**
     * Invoked when a block is placed.
    */
    class BlockPlacedEventJS extends Internal.EntityEventJS {
        constructor(entity: Internal.Entity_, level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_)
        getClass(): typeof any;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        toString(): string;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        /**
         * The level of the block that was placed.
        */
        getLevel(): Internal.Level;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        /**
         * The entity that placed the block. Can be `null`, e.g. when a block is placed by a dispenser.
        */
        getEntity(): Internal.Entity;
        wait(): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        getPlayer(): Player;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        getServer(): Internal.MinecraftServer;
        /**
         * The block that is placed.
        */
        getBlock(): Internal.BlockContainerJS;
        get class(): typeof any
        /**
         * The level of the block that was placed.
        */
        get level(): Internal.Level
        /**
         * The entity that placed the block. Can be `null`, e.g. when a block is placed by a dispenser.
        */
        get entity(): Internal.Entity
        get player(): Player
        get server(): Internal.MinecraftServer
        /**
         * The block that is placed.
        */
        get block(): Internal.BlockContainerJS
    }
    type BlockPlacedEventJS_ = BlockPlacedEventJS;
    class ReportedEntity {
        constructor(arg0: Internal.UUID_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        profileId: Internal.UUID;
    }
    type ReportedEntity_ = ReportedEntity;
    interface BooleanSupplier {
        abstract getAsBoolean(): boolean;
        get asBoolean(): boolean
        (): boolean;
    }
    type BooleanSupplier_ = (()=> boolean) | BooleanSupplier;
    class BigDecimal extends number implements Internal.Comparable<Internal.BigDecimal> {
        constructor(arg0: number, arg1: Internal.MathContext_)
        constructor(arg0: Internal.BigInteger_, arg1: number)
        constructor(arg0: number, arg1: Internal.MathContext_)
        constructor(arg0: string[], arg1: number, arg2: number, arg3: Internal.MathContext_)
        constructor(arg0: number)
        constructor(arg0: number)
        constructor(arg0: Internal.BigInteger_, arg1: Internal.MathContext_)
        constructor(arg0: Internal.BigInteger_)
        constructor(arg0: string[], arg1: Internal.MathContext_)
        constructor(arg0: number)
        constructor(arg0: string[], arg1: number, arg2: number)
        constructor(arg0: Internal.BigInteger_, arg1: number, arg2: Internal.MathContext_)
        constructor(arg0: string, arg1: Internal.MathContext_)
        constructor(arg0: number, arg1: Internal.MathContext_)
        constructor(arg0: string)
        constructor(arg0: string[])
        doubleValue(): number;
        abs(): this;
        pow(arg0: number, arg1: Internal.MathContext_): this;
        min(arg0: Internal.BigDecimal_): this;
        precision(): number;
        subtract(arg0: Internal.BigDecimal_, arg1: Internal.MathContext_): this;
        notify(): void;
        compareTo(arg0: any): number;
        /**
         * @deprecated
        */
        divide(arg0: Internal.BigDecimal_, arg1: number, arg2: number): this;
        "compareTo(java.math.BigDecimal)"(arg0: Internal.BigDecimal_): number;
        "divide(java.math.BigDecimal,java.math.RoundingMode)"(arg0: Internal.BigDecimal_, arg1: Internal.RoundingMode_): this;
        setScale(arg0: number, arg1: Internal.RoundingMode_): this;
        /**
         * @deprecated
        */
        "divide(java.math.BigDecimal,int)"(arg0: Internal.BigDecimal_, arg1: number): this;
        "setScale(int,java.math.RoundingMode)"(arg0: number, arg1: Internal.RoundingMode_): this;
        subtract(arg0: Internal.BigDecimal_): this;
        divideToIntegralValue(arg0: Internal.BigDecimal_, arg1: Internal.MathContext_): this;
        divide(arg0: Internal.BigDecimal_, arg1: number, arg2: Internal.RoundingMode_): this;
        ulp(): this;
        longValue(): number;
        movePointLeft(arg0: number): this;
        static valueOf(arg0: number): Internal.BigDecimal;
        movePointRight(arg0: number): this;
        sqrt(arg0: Internal.MathContext_): this;
        toBigInteger(): Internal.BigInteger;
        round(arg0: Internal.MathContext_): this;
        /**
         * @deprecated
        */
        "setScale(int,int)"(arg0: number, arg1: number): this;
        /**
         * @deprecated
        */
        "divide(java.math.BigDecimal,int,int)"(arg0: Internal.BigDecimal_, arg1: number, arg2: number): this;
        scale(): number;
        shortValue(): number;
        multiply(arg0: Internal.BigDecimal_, arg1: Internal.MathContext_): this;
        wait(): void;
        remainder(arg0: Internal.BigDecimal_, arg1: Internal.MathContext_): this;
        "compareTo(java.lang.Object)"(arg0: any): number;
        toPlainString(): string;
        static valueOf(arg0: number, arg1: number): Internal.BigDecimal;
        "divide(java.math.BigDecimal,int,java.math.RoundingMode)"(arg0: Internal.BigDecimal_, arg1: number, arg2: Internal.RoundingMode_): this;
        getClass(): typeof any;
        divideAndRemainder(arg0: Internal.BigDecimal_, arg1: Internal.MathContext_): Internal.BigDecimal[];
        floatValue(): number;
        divideAndRemainder(arg0: Internal.BigDecimal_): Internal.BigDecimal[];
        plus(arg0: Internal.MathContext_): this;
        scaleByPowerOfTen(arg0: number): this;
        wait(arg0: number, arg1: number): void;
        divide(arg0: Internal.BigDecimal_, arg1: Internal.MathContext_): this;
        add(arg0: Internal.BigDecimal_): this;
        /**
         * @deprecated
        */
        divide(arg0: Internal.BigDecimal_, arg1: number): this;
        intValue(): number;
        compareTo(arg0: Internal.BigDecimal_): number;
        toEngineeringString(): string;
        add(arg0: Internal.BigDecimal_, arg1: Internal.MathContext_): this;
        divide(arg0: Internal.BigDecimal_): this;
        intValueExact(): number;
        "divide(java.math.BigDecimal,java.math.MathContext)"(arg0: Internal.BigDecimal_, arg1: Internal.MathContext_): this;
        abs(arg0: Internal.MathContext_): this;
        plus(): this;
        remainder(arg0: Internal.BigDecimal_): this;
        toString(): string;
        divide(arg0: Internal.BigDecimal_, arg1: Internal.RoundingMode_): this;
        stripTrailingZeros(): this;
        shortValueExact(): number;
        notifyAll(): void;
        longValueExact(): number;
        byteValueExact(): number;
        negate(): this;
        static valueOf(arg0: number): Internal.BigDecimal;
        divideToIntegralValue(arg0: Internal.BigDecimal_): this;
        hashCode(): number;
        negate(arg0: Internal.MathContext_): this;
        static "valueOf(double)"(arg0: number): Internal.BigDecimal;
        toBigIntegerExact(): Internal.BigInteger;
        setScale(arg0: number): this;
        unscaledValue(): Internal.BigInteger;
        multiply(arg0: Internal.BigDecimal_): this;
        wait(arg0: number): void;
        static "valueOf(long)"(arg0: number): Internal.BigDecimal;
        equals(arg0: any): boolean;
        max(arg0: Internal.BigDecimal_): this;
        /**
         * @deprecated
        */
        setScale(arg0: number, arg1: number): this;
        signum(): number;
        pow(arg0: number): this;
        byteValue(): number;
        get class(): typeof any
        set scale(arg0: number)
        /**
         * @deprecated
        */
        static readonly ROUND_UP: (0) & (number);
        /**
         * @deprecated
        */
        static readonly ROUND_DOWN: (1) & (number);
        /**
         * @deprecated
        */
        static readonly ROUND_HALF_UP: (4) & (number);
        /**
         * @deprecated
        */
        static readonly ROUND_HALF_DOWN: (5) & (number);
        static readonly ONE: (1) & (Internal.BigDecimal);
        /**
         * @deprecated
        */
        static readonly ROUND_FLOOR: (3) & (number);
        static readonly ZERO: (0) & (Internal.BigDecimal);
        static readonly TEN: (10) & (Internal.BigDecimal);
        /**
         * @deprecated
        */
        static readonly ROUND_CEILING: (2) & (number);
        /**
         * @deprecated
        */
        static readonly ROUND_HALF_EVEN: (6) & (number);
        /**
         * @deprecated
        */
        static readonly ROUND_UNNECESSARY: (7) & (number);
    }
    type BigDecimal_ = BigDecimal;
    class JigsawStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: Internal.Holder_<Internal.StructureTemplatePool>, arg2: number, arg3: Internal.HeightProvider_, arg4: boolean)
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: Internal.Holder_<Internal.StructureTemplatePool>, arg2: number, arg3: Internal.HeightProvider_, arg4: boolean, arg5: Internal.Heightmap$Types_)
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: Internal.Holder_<Internal.StructureTemplatePool>, arg2: Internal.Optional_<ResourceLocation>, arg3: number, arg4: Internal.HeightProvider_, arg5: boolean, arg6: Internal.Optional_<Internal.Heightmap$Types>, arg7: number)
        static simpleCodec<S extends Internal.Structure>(arg0: Internal.Function_<Internal.Structure$StructureSettings, S>): Internal.Codec<S>;
        getClass(): typeof any;
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        generate(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGenerator_, arg2: Internal.BiomeSource_, arg3: Internal.RandomState_, arg4: Internal.StructureTemplateManager_, arg5: number, arg6: Internal.ChunkPos_, arg7: number, arg8: Internal.LevelHeightAccessor_, arg9: Internal.Predicate_<Internal.Holder<Internal.Biome>>): Internal.StructureStart;
        toString(): string;
        biomes(): Internal.HolderSet<Internal.Biome>;
        findValidGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        spawnOverrides(): Internal.Map<Internal.MobCategory, Internal.StructureSpawnOverride>;
        step(): Internal.GenerationStep$Decoration;
        notifyAll(): void;
        notify(): void;
        terrainAdaptation(): Internal.TerrainAdjustment;
        wait(arg0: number, arg1: number): void;
        adjustBoundingBox(arg0: Internal.BoundingBox_): Internal.BoundingBox;
        hashCode(): number;
        type(): Internal.StructureType<any>;
        static settingsCodec<S extends Internal.Structure>(arg0: Internal.RecordCodecBuilder$Instance_<S>): Internal.RecordCodecBuilder<S, Internal.Structure$StructureSettings>;
        wait(): void;
        modifiableStructureInfo(): Internal.ModifiableStructureInfo;
        wait(arg0: number): void;
        afterPlace(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: Internal.BoundingBox_, arg5: Internal.ChunkPos_, arg6: Internal.PiecesContainer_): void;
        equals(arg0: any): boolean;
        getModifiedStructureSettings(): Internal.Structure$StructureSettings;
        get class(): typeof any
        set tingsCodec(arg0: Internal.RecordCodecBuilder$Instance_<S>)
        get modifiedStructureSettings(): Internal.Structure$StructureSettings
        static readonly CODEC: Internal.Codec<Internal.JigsawStructure>;
        static readonly MAX_TOTAL_STRUCTURE_RANGE: (128) & (number);
    }
    type JigsawStructure_ = JigsawStructure;
    interface ComponentPath {
        path(arg0: Internal.ContainerEventHandler_, arg1: Internal.ComponentPath_): this;
        "path(net.minecraft.client.gui.components.events.ContainerEventHandler,net.minecraft.client.gui.ComponentPath)"(arg0: Internal.ContainerEventHandler_, arg1: Internal.ComponentPath_): this;
        leaf(arg0: Internal.GuiEventListener_): this;
        abstract applyFocus(arg0: boolean): void;
        abstract component(): Internal.GuiEventListener;
        path(arg0: Internal.GuiEventListener_, ...arg1: Internal.ContainerEventHandler_[]): this;
        "path(net.minecraft.client.gui.components.events.GuiEventListener,net.minecraft.client.gui.components.events.ContainerEventHandler[])"(arg0: Internal.GuiEventListener_, ...arg1: Internal.ContainerEventHandler_[]): this;
    }
    type ComponentPath_ = ComponentPath;
    class UseAnim extends Internal.Enum<Internal.UseAnim> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.UseAnim[];
        toString(): string;
        getDeclaringClass(): typeof Internal.UseAnim;
        compareTo(arg0: Internal.UseAnim_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "compareTo(net.minecraft.world.item.UseAnim)"(arg0: Internal.UseAnim_): number;
        compareTo(arg0: any): number;
        name(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.UseAnim>>;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        static valueOf(arg0: string): Internal.UseAnim;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.UseAnim
        static readonly BRUSH: (Internal.UseAnim) & (Internal.UseAnim);
        static readonly CUSTOM: (Internal.UseAnim) & (Internal.UseAnim);
        static readonly TOOT_HORN: (Internal.UseAnim) & (Internal.UseAnim);
        static readonly BOW: (Internal.UseAnim) & (Internal.UseAnim);
        static readonly NONE: (Internal.UseAnim) & (Internal.UseAnim);
        static readonly EAT: (Internal.UseAnim) & (Internal.UseAnim);
        static readonly DRINK: (Internal.UseAnim) & (Internal.UseAnim);
        static readonly BLOCK: (Internal.UseAnim) & (Internal.UseAnim);
        static readonly SPYGLASS: (Internal.UseAnim) & (Internal.UseAnim);
        static readonly SPEAR: (Internal.UseAnim) & (Internal.UseAnim);
        static readonly CROSSBOW: (Internal.UseAnim) & (Internal.UseAnim);
    }
    type UseAnim_ = "toot_horn" | "spear" | "eat" | "block" | UseAnim | "brush" | "crossbow" | "spyglass" | "bow" | "drink" | "custom" | "none";
    interface LongSet extends Internal.LongCollection, Internal.Set<number> {
        abstract remove(arg0: number): boolean;
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        /**
         * @deprecated
        */
        "forEach(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        of(arg0: number, arg1: number, arg2: number): this;
        "removeIf(java.util.function.LongPredicate)"(arg0: Internal.LongPredicate_): boolean;
        removeIf(arg0: Internal.LongPredicate_): boolean;
        "of(long,long,long)"(arg0: number, arg1: number, arg2: number): this;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        of(arg0: number): this;
        of<E>(arg0: E, arg1: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        abstract "containsAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        abstract retainAll(arg0: Internal.LongCollection_): boolean;
        abstract "retainAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        forEach(arg0: Internal.LongConsumer_): void;
        "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.Set<E>;
        /**
         * @deprecated
        */
        "contains(java.lang.Object)"(arg0: any): boolean;
        abstract addAll(arg0: Internal.LongCollection_): boolean;
        abstract "remove(long)"(arg0: number): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        abstract "removeAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        "removeIf(java.util.function.Predicate)"(arg0: Internal.Predicate_<number>): boolean;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        "removeIf(it.unimi.dsi.fastutil.longs.LongPredicate)"(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): boolean;
        of(arg0: number, arg1: number): this;
        spliterator(): Internal.LongSpliterator;
        forEach(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        abstract removeAll(arg0: Internal.LongCollection_): boolean;
        abstract containsAll(arg0: Internal.LongCollection_): boolean;
        of<E>(arg0: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        longSpliterator(): Internal.LongSpliterator;
        "of(java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E): Internal.Set<E>;
        abstract "addAll(it.unimi.dsi.fastutil.longs.LongCollection)"(arg0: Internal.LongCollection_): boolean;
        "of(long)"(arg0: number): this;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        "forEach(java.util.function.LongConsumer)"(arg0: Internal.LongConsumer_): void;
        abstract "toArray(long[])"(arg0: number[]): number[];
        abstract "removeAll(it.unimi.dsi.fastutil.longs.LongCollection)"(arg0: Internal.LongCollection_): boolean;
        longIterator(): Internal.LongIterator;
        abstract add(arg0: number): boolean;
        abstract isEmpty(): boolean;
        abstract "contains(long)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        "add(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        toLongArray(arg0: number[]): number[];
        abstract addAll(arg0: Internal.Collection_<number>): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract "retainAll(it.unimi.dsi.fastutil.longs.LongCollection)"(arg0: Internal.LongCollection_): boolean;
        abstract toArray(arg0: number[]): number[];
        "of(long,long)"(arg0: number, arg1: number): this;
        /**
         * @deprecated
        */
        "add(java.lang.Long)"(arg0: number): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        of(...arg0: number[]): this;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        abstract "containsAll(it.unimi.dsi.fastutil.longs.LongCollection)"(arg0: Internal.LongCollection_): boolean;
        abstract "add(long)"(arg0: number): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        iterator(): Internal.Iterator<any>;
        abstract contains(arg0: number): boolean;
        "of(java.lang.Object,java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract toArray(): any[];
        of(): this;
        /**
         * @deprecated
        */
        rem(arg0: number): boolean;
        abstract "addAll(java.util.Collection)"(arg0: Internal.Collection_<number>): boolean;
        "forEach(it.unimi.dsi.fastutil.longs.LongConsumer)"(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        abstract toLongArray(): number[];
        abstract hashCode(): number;
        abstract size(): number;
        longParallelStream(): Internal.LongStream;
        of<E>(...arg0: E[]): Internal.Set<E>;
        "of(long[])"(...arg0: number[]): this;
        longStream(): Internal.LongStream;
        abstract clear(): void;
        abstract equals(arg0: any): boolean;
        removeIf(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): boolean;
        "of(java.lang.Object)"<E>(arg0: E): Internal.Set<E>;
        get empty(): boolean
    }
    type LongSet_ = LongSet;
    class TreeDecorator$Context {
        constructor(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: Internal.Set_<BlockPos>, arg4: Internal.Set_<BlockPos>, arg5: Internal.Set_<BlockPos>)
        getClass(): typeof any;
        roots(): Internal.ObjectArrayList<BlockPos>;
        toString(): string;
        leaves(): Internal.ObjectArrayList<BlockPos>;
        random(): Internal.RandomSource;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        placeVine(arg0: BlockPos_, arg1: Internal.BooleanProperty_): void;
        setBlock(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        level(): Internal.LevelSimulatedReader;
        hashCode(): number;
        isAir(arg0: BlockPos_): boolean;
        wait(): void;
        logs(): Internal.ObjectArrayList<BlockPos>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type TreeDecorator$Context_ = TreeDecorator$Context;
    class ClientboundTabListPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Component_, arg1: Internal.Component_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        getHeader(): Internal.Component;
        getFooter(): Internal.Component;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get header(): Internal.Component
        get footer(): Internal.Component
        get skippable(): boolean
    }
    type ClientboundTabListPacket_ = ClientboundTabListPacket;
    class PistonHeadBlock extends Internal.DirectionalBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getDescriptionId(): string;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getSpeedFactor(): number;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Player_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getRenderPropertiesInternal(): any;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        setSpeedFactor(arg0: number): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        getFriction(): number;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        wait(arg0: number): void;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        notify(): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        setDestroySpeed(v: number): void;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        wait(): void;
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static stateById(arg0: number): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get descriptionId(): string
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get jumpFactor(): number
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set destroySpeed(v: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get name(): Internal.MutableComponent
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get mod(): string
        set soundType(arg0: SoundType_)
        set hasCollision(arg0: boolean)
        static readonly TYPE: Internal.EnumProperty<Internal.PistonType>;
        static readonly SHORT: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly PLATFORM: (4.0) & (number);
    }
    type PistonHeadBlock_ = PistonHeadBlock;
    class InsideWorldBoundsPredicate implements net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate {
        constructor(arg0: Vec3i_)
        static noFluid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        and(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static "matchesBlocks(java.util.List)"(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesTag(arg0: Vec3i_, arg1: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        notify(): void;
        negate(): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        test(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static solid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static insideWorld(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        or(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static alwaysTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static solid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        type(): Internal.BlockPredicateType<any>;
        static matchesBlocks(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.world.level.block.Block[])"(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(): void;
        static anyOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "anyOf(net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate[])"(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Vec3i_, arg1: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        test(arg0: any, arg1: any): boolean;
        static matchesBlocks(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        getClass(): typeof any;
        static "matchesFluids(net.minecraft.core.Vec3i,net.minecraft.world.level.material.Fluid[])"(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "allOf(java.util.List)"(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "anyOf(java.util.List)"(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(arg0: number, arg1: number): void;
        static anyOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.core.Vec3i,net.minecraft.world.level.block.Block[])"(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "allOf(net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate[])"(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        "test(net.minecraft.world.level.WorldGenLevel,net.minecraft.core.BlockPos)"(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static matchesBlocks(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        toString(): string;
        notifyAll(): void;
        static "matchesBlocks(net.minecraft.core.Vec3i,java.util.List)"(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesFluids(net.minecraft.core.Vec3i,java.util.List)"(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static wouldSurvive(arg0: Internal.BlockState_, arg1: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        hashCode(): number;
        static not(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(arg0: number): void;
        static replaceable(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        "test(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): boolean;
        static matchesBlocks(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        equals(arg0: any): boolean;
        static matchesFluids(...arg0: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.InsideWorldBoundsPredicate>;
    }
    type InsideWorldBoundsPredicate_ = InsideWorldBoundsPredicate;
    class ServerConnectionListener {
        constructor(arg0: Internal.MinecraftServer_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        tick(): void;
        hashCode(): number;
        wait(): void;
        stop(): void;
        wait(arg0: number): void;
        startMemoryChannel(): Internal.SocketAddress;
        equals(arg0: any): boolean;
        startTcpServerListener(arg0: Internal.InetAddress_, arg1: number): void;
        getServer(): Internal.MinecraftServer;
        getConnections(): Internal.List<Internal.Connection>;
        get class(): typeof any
        get server(): Internal.MinecraftServer
        get connections(): Internal.List<Internal.Connection>
        static readonly SERVER_EPOLL_EVENT_GROUP: Internal.LazyLoadedValue<Internal.EpollEventLoopGroup>;
        running: boolean;
        static readonly SERVER_EVENT_GROUP: Internal.LazyLoadedValue<Internal.NioEventLoopGroup>;
    }
    type ServerConnectionListener_ = ServerConnectionListener;
    class MethodHandles$Lookup {
        getClass(): typeof any;
        /**
         * @deprecated
        */
        hasPrivateAccess(): boolean;
        hasFullPrivilegeAccess(): boolean;
        findVarHandle(arg0: typeof any, arg1: string, arg2: typeof any): Internal.VarHandle;
        unreflectSetter(arg0: Internal.Field_): Internal.MethodHandle;
        findStaticVarHandle(arg0: typeof any, arg1: string, arg2: typeof any): Internal.VarHandle;
        unreflectConstructor(arg0: Internal.Constructor_<any>): Internal.MethodHandle;
        findClass(arg0: string): typeof any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        unreflect(arg0: Internal.Method_): Internal.MethodHandle;
        findGetter(arg0: typeof any, arg1: string, arg2: typeof any): Internal.MethodHandle;
        findSetter(arg0: typeof any, arg1: string, arg2: typeof any): Internal.MethodHandle;
        findConstructor(arg0: typeof any, arg1: Internal.MethodType_): Internal.MethodHandle;
        dropLookupMode(arg0: number): this;
        defineHiddenClassWithClassData(arg0: number[], arg1: any, arg2: boolean, ...arg3: any_[]): this;
        unreflectSpecial(arg0: Internal.Method_, arg1: typeof any): Internal.MethodHandle;
        "in"(arg0: typeof any): this;
        lookupClass(): typeof any;
        findStaticSetter(arg0: typeof any, arg1: string, arg2: typeof any): Internal.MethodHandle;
        previousLookupClass(): typeof any;
        unreflectVarHandle(arg0: Internal.Field_): Internal.VarHandle;
        toString(): string;
        unreflectGetter(arg0: Internal.Field_): Internal.MethodHandle;
        accessClass(arg0: typeof any): typeof any;
        findSpecial(arg0: typeof any, arg1: string, arg2: Internal.MethodType_, arg3: typeof any): Internal.MethodHandle;
        notifyAll(): void;
        bind(arg0: any, arg1: string, arg2: Internal.MethodType_): Internal.MethodHandle;
        ensureInitialized(arg0: typeof any): typeof any;
        lookupModes(): number;
        hashCode(): number;
        defineClass(arg0: number[]): typeof any;
        findVirtual(arg0: typeof any, arg1: string, arg2: Internal.MethodType_): Internal.MethodHandle;
        wait(): void;
        wait(arg0: number): void;
        findStatic(arg0: typeof any, arg1: string, arg2: Internal.MethodType_): Internal.MethodHandle;
        findStaticGetter(arg0: typeof any, arg1: string, arg2: typeof any): Internal.MethodHandle;
        revealDirect(arg0: Internal.MethodHandle_): Internal.MethodHandleInfo;
        defineHiddenClass(arg0: number[], arg1: boolean, ...arg2: any_[]): this;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly PACKAGE: (8) & (number);
        static readonly PUBLIC: (1) & (number);
        static readonly UNCONDITIONAL: (32) & (number);
        static readonly MODULE: (16) & (number);
        static readonly ORIGINAL: (64) & (number);
        static readonly PRIVATE: (2) & (number);
        static readonly PROTECTED: (4) & (number);
    }
    type MethodHandles$Lookup_ = MethodHandles$Lookup;
    abstract class AgeableListModel <E extends Internal.Entity> extends Internal.EntityModel<E> {
        abstract setupAnim(arg0: E, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getClass(): typeof any;
        toString(): string;
        renderType(arg0: ResourceLocation_): Internal.RenderType;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        copyPropertiesTo(arg0: Internal.EntityModel_<E>): void;
        prepareMobModel(arg0: E, arg1: number, arg2: number, arg3: number): void;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        renderToBuffer(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        get class(): typeof any
        readonly babyZHeadOffset: number;
        readonly babyBodyScale: number;
        readonly babyYHeadOffset: number;
        readonly babyHeadScale: number;
        readonly bodyYOffset: number;
        readonly scaleHead: boolean;
    }
    type AgeableListModel_<E extends Internal.Entity> = AgeableListModel<E>;
    class ByteArrayTag extends Internal.CollectionTag<Internal.ByteTag> {
        constructor(arg0: Internal.List_<number>)
        constructor(arg0: number[])
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        "set(int,java.lang.Object)"(arg0: number, arg1: any): any;
        getType(): Internal.TagType<Internal.ByteArrayTag>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        parallelStream(): Internal.Stream<Internal.ByteTag>;
        "add(int,java.lang.Object)"(arg0: number, arg1: any): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        "accept(net.minecraft.nbt.StreamTagVisitor)"(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        notify(): void;
        add(arg0: number, arg1: any): void;
        sizeInBytes(): number;
        static of<E>(arg0: E): Internal.List<E>;
        add(arg0: Internal.ByteTag_): boolean;
        static of<E>(): Internal.List<E>;
        setTag(arg0: number, arg1: Internal.Tag_): boolean;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        subList(arg0: number, arg1: number): Internal.List<Internal.ByteTag>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        getAsByteArray(): number[];
        removeIf(arg0: Internal.Predicate_<Internal.ByteTag>): boolean;
        write(arg0: Internal.DataOutput_): void;
        replaceAll(arg0: Internal.UnaryOperator_<Internal.ByteTag>): void;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        indexOf(arg0: any): number;
        forEach(arg0: Internal.Consumer_<Internal.ByteTag>): void;
        abstract toArray<T>(arg0: T[]): T[];
        "set(int,net.minecraft.nbt.ByteTag)"(arg0: number, arg1: Internal.ByteTag_): Internal.ByteTag;
        abstract remove(arg0: any): boolean;
        abstract "remove(java.lang.Object)"(arg0: any): boolean;
        "add(int,net.minecraft.nbt.ByteTag)"(arg0: number, arg1: Internal.ByteTag_): void;
        add(arg0: number, arg1: Internal.ByteTag_): void;
        add(arg0: number, arg1: Internal.Tag_): void;
        accept(arg0: Internal.TagVisitor_): void;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        copy(): Internal.Tag;
        wait(): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        listIterator(): Internal.ListIterator<Internal.ByteTag>;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.List<E>;
        set(arg0: number, arg1: any): any;
        abstract addAll(arg0: Internal.Collection_<Internal.ByteTag>): boolean;
        getElementType(): number;
        lastIndexOf(arg0: any): number;
        "remove(int)"(arg0: number): Internal.ByteTag;
        getClass(): typeof any;
        addAll(arg0: number, arg1: Internal.Collection_<Internal.ByteTag>): boolean;
        set(arg0: number, arg1: Internal.Tag_): Internal.Tag;
        iterator(): Internal.Iterator<Internal.ByteTag>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        addTag(arg0: number, arg1: Internal.Tag_): boolean;
        sort(arg0: Internal.Comparator_<Internal.ByteTag>): void;
        abstract isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        "accept(net.minecraft.nbt.TagVisitor)"(arg0: Internal.TagVisitor_): void;
        set(arg0: number, arg1: Internal.ByteTag_): Internal.ByteTag;
        static of<E>(...arg0: E[]): Internal.List<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        getId(): number;
        spliterator(): Internal.Spliterator<Internal.ByteTag>;
        "set(int,net.minecraft.nbt.Tag)"(arg0: number, arg1: Internal.Tag_): Internal.Tag;
        abstract contains(arg0: any): boolean;
        stream(): Internal.Stream<Internal.ByteTag>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.List<E>;
        toString(): string;
        notifyAll(): void;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        get(arg0: number): any;
        abstract toArray(): any[];
        "add(int,net.minecraft.nbt.Tag)"(arg0: number, arg1: Internal.Tag_): void;
        remove(arg0: number): Internal.ByteTag;
        hashCode(): number;
        size(): number;
        getAsString(): string;
        clear(): void;
        listIterator(arg0: number): Internal.ListIterator<Internal.ByteTag>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get type(): Internal.TagType<Internal.ByteArrayTag>
        get asByteArray(): number[]
        get elementType(): number
        get class(): typeof any
        get empty(): boolean
        get id(): number
        get asString(): string
        static readonly TYPE: Internal.TagType<Internal.ByteArrayTag>;
    }
    type ByteArrayTag_ = ByteArrayTag;
    abstract class BaseImmutableMultimap <K, V> extends Internal.AbstractMultimap<K, V> {
        getClass(): typeof any;
        replaceValues(arg0: K, arg1: Internal.Iterable_<V>): Internal.Collection<V>;
        abstract removeAll(arg0: any): Internal.Collection<V>;
        entries(): Internal.Collection<Internal.Map$Entry<K, V>>;
        containsValue(arg0: any): boolean;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        abstract containsKey(arg0: any): boolean;
        putAll(arg0: K, arg1: Internal.Iterable_<V>): boolean;
        keys(): Internal.Multiset<K>;
        keySet(): Internal.Set<K>;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        abstract get(arg0: K): Internal.Collection<V>;
        toString(): string;
        values(): Internal.Collection<V>;
        notifyAll(): void;
        remove(arg0: any, arg1: any): boolean;
        containsEntry(arg0: any, arg1: any): boolean;
        hashCode(): number;
        abstract size(): number;
        putAll(arg0: Internal.Multimap_<K, V>): boolean;
        put(arg0: K, arg1: V): boolean;
        wait(): void;
        abstract clear(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        asMap(): Internal.Map<K, Internal.Collection<V>>;
        get class(): typeof any
        get empty(): boolean
    }
    type BaseImmutableMultimap_<K, V> = BaseImmutableMultimap<K, V>;
    class RenderLivingEvent$Pre <T extends Internal.LivingEntity, M extends Internal.EntityModel<T>> extends Internal.RenderLivingEvent<T, M> {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntityRenderer_<T, M>, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        getPartialTick(): number;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getEntity(): Internal.LivingEntity;
        notifyAll(): void;
        isCanceled(): boolean;
        getPackedLight(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        getPoseStack(): Internal.PoseStack;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        getRenderer(): Internal.LivingEntityRenderer<T, M>;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getMultiBufferSource(): Internal.MultiBufferSource;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get partialTick(): number
        set phase(arg0: Internal.EventPriority_)
        get entity(): Internal.LivingEntity
        get canceled(): boolean
        get packedLight(): number
        set result(arg0: Internal.Event$Result_)
        get poseStack(): Internal.PoseStack
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get renderer(): Internal.LivingEntityRenderer<T, M>
        get phase(): Internal.EventPriority
        get multiBufferSource(): Internal.MultiBufferSource
    }
    type RenderLivingEvent$Pre_<T extends Internal.LivingEntity, M extends Internal.EntityModel<T>> = RenderLivingEvent$Pre<T, M>;
    class BlockStateRotateCallbackJS extends Internal.BlockStateModifyCallbackJS {
        constructor(state: Internal.BlockState_, rotation: Internal.Rotation_)
        /**
         * Checks if this block has the specified property
        */
        hasProperty<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): boolean;
        getClass(): typeof any;
        /**
         * Sets the value of the specified enum property
        */
        "set(net.minecraft.world.level.block.state.properties.EnumProperty,java.lang.String)"<T extends Internal.Enum<T> & Internal.StringRepresentable>(property: Internal.EnumProperty_<T>, value: string): Internal.BlockStateModifyCallbackJS;
        /**
         * Get a map of this blocks properties to it's value
        */
        getValues(): Internal.ImmutableMap<Internal.Property<any>, Internal.Comparable<any>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        /**
         * Gets the value of the passed in property
        */
        getValue<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): T;
        /**
         * Sets the value of the specified boolean property
        */
        set(property: Internal.BooleanProperty_, value: boolean): Internal.BlockStateModifyCallbackJS;
        /**
         * Cycles the property
        */
        cycle<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): Internal.BlockStateModifyCallbackJS;
        /**
         * Sets the value of the specified integer property
        */
        set(property: Internal.IntegerProperty_, value: number): Internal.BlockStateModifyCallbackJS;
        /**
         * Updates the shape of this block. Mostly used in waterloggable blocks to update the water flow
        */
        updateShape(direction: Internal.Direction_, blockState: Internal.BlockState_, levelAccessor: Internal.LevelAccessor_, blockPos: BlockPos_, blockPos2: BlockPos_): Internal.BlockStateModifyCallbackJS;
        /**
         * Gets the state. If it has been modified, gets the new state
        */
        getState(): Internal.BlockState;
        /**
         * Sets the value of the specified integer property
        */
        "set(net.minecraft.world.level.block.state.properties.IntegerProperty,java.lang.Integer)"(property: Internal.IntegerProperty_, value: number): Internal.BlockStateModifyCallbackJS;
        toString(): string;
        /**
         * Mirror the block using the specified Mirror
        */
        mirror(mirror: Internal.Mirror_): Internal.BlockStateModifyCallbackJS;
        notifyAll(): void;
        /**
         * Gets the value of the pased in property
        */
        get<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): T;
        /**
         * Sets the value of the specified property
        */
        setValue<T extends Internal.Comparable<T>, V extends T>(property: Internal.Property_<T>, comparable: V): Internal.BlockStateModifyCallbackJS;
        /**
         * Sets the value of the specified boolean property
        */
        "set(net.minecraft.world.level.block.state.properties.BooleanProperty,boolean)"(property: Internal.BooleanProperty_, value: boolean): Internal.BlockStateModifyCallbackJS;
        populateNeighbours(map: Internal.Map_<Internal.Map<Internal.Property<any>, Internal.Comparable<any>>, Internal.BlockState>): Internal.BlockStateModifyCallbackJS;
        /**
         * Rotates the specified direction
        */
        rotate(dir: Internal.Direction_): Internal.Direction;
        /**
         * Get the Rotation that this block is being rotated by
        */
        getRotation(): Internal.Rotation;
        /**
         * Sets the value of the specified enum property
        */
        set<T extends Internal.Enum<T> & Internal.StringRepresentable>(property: Internal.EnumProperty_<T>, value: string): Internal.BlockStateModifyCallbackJS;
        hashCode(): number;
        /**
         * Get the properties this block has that can be changed
        */
        getProperties(): Internal.Collection<Internal.Property<any>>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        /**
         * Gets the value of the passed in property as an Optional. If the property does not exist in this block the Optional will be empty
        */
        getOptionalValue<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): Internal.Optional<T>;
        get class(): typeof any
        /**
         * Get a map of this blocks properties to it's value
        */
        get values(): Internal.ImmutableMap<Internal.Property<any>, Internal.Comparable<any>>
        /**
         * Gets the state. If it has been modified, gets the new state
        */
        get state(): Internal.BlockState
        /**
         * Get the Rotation that this block is being rotated by
        */
        get rotation(): Internal.Rotation
        /**
         * Get the properties this block has that can be changed
        */
        get properties(): Internal.Collection<Internal.Property<any>>
    }
    type BlockStateRotateCallbackJS_ = BlockStateRotateCallbackJS;
    abstract class ScreenEvent extends Internal.Event {
        constructor()
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getScreen(): Internal.Screen;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get screen(): Internal.Screen
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ScreenEvent_ = ScreenEvent;
    class LavaCauldronBlock extends Internal.AbstractCauldronBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getDescriptionId(): string;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getSpeedFactor(): number;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Player_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getRenderPropertiesInternal(): any;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        setSpeedFactor(arg0: number): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        getFriction(): number;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        wait(arg0: number): void;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        notify(): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        isFull(arg0: Internal.BlockState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        setDestroySpeed(v: number): void;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        wait(): void;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        setIsRandomlyTicking(arg0: boolean): void;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static stateById(arg0: number): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get descriptionId(): string
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get jumpFactor(): number
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set destroySpeed(v: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get name(): Internal.MutableComponent
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get mod(): string
        set soundType(arg0: SoundType_)
        set hasCollision(arg0: boolean)
    }
    type LavaCauldronBlock_ = LavaCauldronBlock;
    interface ToDoubleBiFunction <T, U> {
        abstract applyAsDouble(arg0: T, arg1: U): number;
        (arg0: T, arg1: U): number;
    }
    type ToDoubleBiFunction_<T, U> = ToDoubleBiFunction<T, U> | ((arg0: T, arg1: U)=> number);
    interface TextureAtlasSprite$Ticker extends Internal.AutoCloseable {
        abstract close(): void;
        abstract tickAndUpload(): void;
    }
    type TextureAtlasSprite$Ticker_ = TextureAtlasSprite$Ticker;
    class BlightEffect extends Internal.MagicMobEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        getDisplayName(): Internal.Component;
        getClass(): typeof any;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: string, arg2: number, arg3: Internal.AttributeModifier$Operation_): Internal.MobEffect;
        isInstantenous(): boolean;
        addAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        static reduceDamageOutput(arg0: Internal.LivingDamageEvent_): void;
        applyInstantenousEffect(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: Internal.LivingEntity_, arg3: number, arg4: number): void;
        notify(): void;
        isBeneficial(): boolean;
        wait(arg0: number, arg1: number): void;
        getEffectRendererInternal(): any;
        getColor(): number;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientMobEffectExtensions>): void;
        removeAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        static reduceHealing(arg0: Internal.LivingHealEvent_): void;
        applyEffectTick(arg0: Internal.LivingEntity_, arg1: number): void;
        getAttributeModifierValue(arg0: number, arg1: Internal.AttributeModifier_): number;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        getDescriptionId(): string;
        static getIdFromNullable(arg0: Internal.MobEffect_): number;
        getCategory(): Internal.MobEffectCategory;
        toString(): string;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        notifyAll(): void;
        setFactorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>): Internal.MobEffect;
        createFactorData(): Internal.Optional<Internal.MobEffectInstance$FactorData>;
        static byId(arg0: number): Internal.MobEffect;
        hashCode(): number;
        getAttributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isDurationEffectTick(arg0: number, arg1: number): boolean;
        static getId(arg0: Internal.MobEffect_): number;
        get displayName(): Internal.Component
        get class(): typeof any
        get instantenous(): boolean
        get beneficial(): boolean
        get effectRendererInternal(): any
        get color(): number
        get descriptionId(): string
        get category(): Internal.MobEffectCategory
        get curativeItems(): Internal.List<Internal.ItemStack>
        set factorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>)
        get attributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>
        static readonly DAMAGE_PER_LEVEL: (-0.05) & (number);
        static readonly HEALING_PER_LEVEL: (-0.1) & (number);
    }
    type BlightEffect_ = BlightEffect;
    abstract class BaseAuthenticationService implements Internal.AuthenticationService {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        abstract createProfileRepository(): Internal.GameProfileRepository;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        abstract createMinecraftSessionService(): Internal.MinecraftSessionService;
        wait(arg0: number): void;
        abstract createUserAuthentication(arg0: Internal.Agent_): Internal.UserAuthentication;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type BaseAuthenticationService_ = BaseAuthenticationService;
    interface Nameable {
        getDisplayName(): Internal.Component;
        abstract getName(): Internal.Component;
        hasCustomName(): boolean;
        getCustomName(): Internal.Component;
        get displayName(): Internal.Component
        get name(): Internal.Component
        get customName(): Internal.Component
        (): Internal.Component_;
    }
    type Nameable_ = Nameable | (()=> Internal.Component_);
    class UntouchingEnchantment extends Internal.Enchantment {
        getClass(): typeof any;
        getDamageProtection(arg0: number, arg1: DamageSource_): number;
        getFullname(arg0: number): Internal.Component;
        isCompatibleWith(arg0: Internal.Enchantment_): boolean;
        getRarity(): Internal.Enchantment$Rarity;
        isTradeable(): boolean;
        isTreasureOnly(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMaxCost(arg0: number): number;
        isDiscoverable(): boolean;
        getMinCost(arg0: number): number;
        static byId(arg0: number): Internal.Enchantment;
        getDescriptionId(): string;
        doPostHurt(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        toString(): string;
        getMaxLevel(): number;
        doPostAttack(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        notifyAll(): void;
        getSlotItems(arg0: Internal.LivingEntity_): Internal.Map<Internal.EquipmentSlot, Internal.ItemStack>;
        getMinLevel(): number;
        /**
         * @deprecated
        */
        getDamageBonus(arg0: number, arg1: Internal.MobType_): number;
        hashCode(): number;
        isCurse(): boolean;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        wait(): void;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        checkCompatibility(arg0: Internal.Enchantment_): boolean;
        wait(arg0: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_): boolean;
        equals(arg0: any): boolean;
        canEnchant(arg0: Internal.ItemStack_): boolean;
        isAllowedOnBooks(): boolean;
        get class(): typeof any
        get rarity(): Internal.Enchantment$Rarity
        get tradeable(): boolean
        get treasureOnly(): boolean
        get discoverable(): boolean
        get descriptionId(): string
        get maxLevel(): number
        get minLevel(): number
        get curse(): boolean
        get allowedOnBooks(): boolean
    }
    type UntouchingEnchantment_ = UntouchingEnchantment;
    interface IEventListener {
        abstract invoke(arg0: Internal.Event_): void;
        listenerName(): string;
        (arg0: Internal.Event): void;
    }
    type IEventListener_ = IEventListener | ((arg0: Internal.Event)=> void);
    interface Constant <T extends Internal.Constant<T>> extends Internal.Comparable<T> {
        abstract name(): string;
        abstract compareTo(arg0: T): number;
        abstract id(): number;
    }
    type Constant_<T extends Internal.Constant<T>> = Constant<T>;
    class PropertyComment extends Internal.AbstractProperty<Internal.PropertyComment> {
        constructor()
        constructor(...lines: string[])
        getClass(): typeof any;
        merge(other: Internal.AbstractDocumentBase_<any>): Internal.AbstractDocumentBase<any>;
        isEmpty(): boolean;
        getLines(): Internal.List<string>;
        applyProperties(): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        fulfillsConditions(): boolean;
        "merge(com.probejs.jdoc.property.PropertyComment)"(other: Internal.PropertyComment_): this;
        deserialize(object: Internal.JsonObject_): void;
        merge(other: Internal.PropertyComment_): this;
        toString(): string;
        addPropertyJson(json: Internal.JsonObject_): Internal.AbstractDocumentBase<Internal.PropertyComment>;
        notifyAll(): void;
        serialize(): Internal.JsonObject;
        isHidden(): boolean;
        copy(): this;
        findPropertiesOf<E extends Internal.AbstractProperty<any>>(property: E): Internal.List<E>;
        formatLines(indent: number): Internal.List<string>;
        findProperty<P extends Internal.AbstractProperty<P>>(property: P): Internal.Optional<P>;
        hashCode(): number;
        findProperties(predicate: Internal.Predicate_<Internal.AbstractProperty<any>>): Internal.List<Internal.AbstractProperty<any>>;
        add(line: string): this;
        wait(): void;
        wait(arg0: number): void;
        "merge(com.probejs.jdoc.document.AbstractDocumentBase)"(other: Internal.AbstractDocumentBase_<any>): Internal.AbstractDocumentBase<any>;
        equals(o: any): boolean;
        hasProperty<P extends Internal.AbstractProperty<P>>(property: P): boolean;
        get class(): typeof any
        get empty(): boolean
        get lines(): Internal.List<string>
        get hidden(): boolean
    }
    type PropertyComment_ = PropertyComment;
    class ClientboundSetPlayerTeamPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        getTeamAction(): Internal.ClientboundSetPlayerTeamPacket$Action;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        getPlayerAction(): Internal.ClientboundSetPlayerTeamPacket$Action;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        getPlayers(): Internal.Collection<string>;
        static createAddOrModifyPacket(arg0: Internal.PlayerTeam_, arg1: boolean): Internal.ClientboundSetPlayerTeamPacket;
        hashCode(): number;
        static createPlayerPacket(arg0: Internal.PlayerTeam_, arg1: string, arg2: Internal.ClientboundSetPlayerTeamPacket$Action_): Internal.ClientboundSetPlayerTeamPacket;
        static createRemovePacket(arg0: Internal.PlayerTeam_): Internal.ClientboundSetPlayerTeamPacket;
        wait(): void;
        getName(): string;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        getParameters(): Internal.Optional<Internal.ClientboundSetPlayerTeamPacket$Parameters>;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get teamAction(): Internal.ClientboundSetPlayerTeamPacket$Action
        get playerAction(): Internal.ClientboundSetPlayerTeamPacket$Action
        get skippable(): boolean
        get players(): Internal.Collection<string>
        get name(): string
        get parameters(): Internal.Optional<Internal.ClientboundSetPlayerTeamPacket$Parameters>
    }
    type ClientboundSetPlayerTeamPacket_ = ClientboundSetPlayerTeamPacket;
    class BlockState extends Internal.BlockBehaviour$BlockStateBase implements Internal.IForgeBlockState {
        constructor(arg0: Internal.Block_, arg1: Internal.ImmutableMap_<Internal.Property<any>, Internal.Comparable<any>>, arg2: Internal.MapCodec_<Internal.BlockState>)
        populateNeighbours(arg0: Internal.Map_<Internal.Map<Internal.Property<any>, Internal.Comparable<any>>, Internal.BlockState>): void;
        updateNeighbourShapes(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number): void;
        canOcclude(): boolean;
        isPortalFrame(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getValues(): Internal.ImmutableMap<Internal.Property<any>, Internal.Comparable<any>>;
        getSoundType(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Entity_): SoundType;
        getLightBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        tick(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.RandomSource_): void;
        updateNeighbourShapes(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number, arg3: number): void;
        "is(net.minecraft.core.HolderSet)"(arg0: Internal.HolderSet_<Internal.Block>): boolean;
        isBed(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.LivingEntity_): boolean;
        is(arg0: Internal.TagKey_<Internal.Block>): boolean;
        canHarvestBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Player_): boolean;
        isConduitFrame(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_): boolean;
        setValue<T extends Internal.Comparable<T>, V extends T>(arg0: Internal.Property_<T>, arg1: V): this;
        useShapeForLightOcclusion(): boolean;
        initCache(): void;
        isRandomlyTicking(): boolean;
        shouldSpawnParticlesOnBreak(): boolean;
        canSurvive(arg0: Internal.LevelReader_, arg1: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: BlockPos_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Vec3d_): this;
        getSeed(arg0: BlockPos_): number;
        isFaceSturdy(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        getToolModifiedState(arg0: Internal.UseOnContext_, arg1: Internal.ToolAction_, arg2: boolean): this;
        addLandingEffects(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: number): boolean;
        getCollisionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.CollisionContext_): Internal.VoxelShape;
        getClass(): typeof any;
        isViewBlocking(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getFluidState(): Internal.FluidState;
        getShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        "is(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): boolean;
        onCaughtFire(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.LivingEntity_): void;
        getTags(): Internal.Stream<Internal.TagKey<Internal.Block>>;
        instrument(): Internal.NoteBlockInstrument;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): boolean;
        hasBlockEntity(): boolean;
        getValue<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>): T;
        hasAnalogOutputSignal(): boolean;
        supportsExternalFaceHiding(): boolean;
        hasOffsetFunction(): boolean;
        setRequiresTool(arg0: boolean): void;
        getBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_): Internal.BlockPathTypes;
        getRenderShape(): Internal.RenderShape;
        rotate(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.Rotation_): this;
        getPistonPushReaction(): Internal.PushReaction;
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
        getDrops(arg0: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        isFaceSturdy(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.SupportType_): boolean;
        hasPostProcess(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        /**
         * @deprecated
        */
        isSolid(): boolean;
        toString(): string;
        entityInside(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Entity_): void;
        notifyAll(): void;
        updateIndirectNeighbourShapes(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number): void;
        isBurning(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        canEntityDestroy(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Entity_): boolean;
        entityCanStandOn(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Entity_): boolean;
        getRespawnPosition(arg0: Internal.EntityType_<any>, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: number, arg4: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        isCollisionShapeFullBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getCollisionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        onTreeGrow(arg0: Internal.LevelReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: Internal.TreeConfiguration_): boolean;
        getLightEmission(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        canBeReplaced(arg0: Internal.Fluid_): boolean;
        wait(arg0: number): void;
        isStickyBlock(): boolean;
        onDestroyedByPlayer(arg0: Internal.Level_, arg1: BlockPos_, arg2: Player_, arg3: boolean, arg4: Internal.FluidState_): boolean;
        getOptionalValue<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>): Internal.Optional<T>;
        getFlammability(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): number;
        randomTick(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.RandomSource_): void;
        onBlockExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getShape(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.CollisionContext_): Internal.VoxelShape;
        canRedstoneConnectTo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Entity_): boolean;
        getSignal(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): number;
        /**
         * @deprecated
        */
        getLightEmission(): number;
        notify(): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        getAdjacentBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        getExpDrop(arg0: Internal.LevelReader_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: number, arg4: number): number;
        getInteractionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        cycle<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>): this;
        setBedOccupied(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.LivingEntity_, arg3: boolean): void;
        setLightEmission(arg0: number): void;
        isSolidRender(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isPathfindable(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.PathComputationType_): boolean;
        getVisualShape(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.CollisionContext_): Internal.VoxelShape;
        ignitedByLava(): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.Rotation_): this;
        isLadder(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.LivingEntity_): boolean;
        setDestroySpeed(arg0: number): void;
        is(arg0: Internal.HolderSet_<Internal.Block>): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        onRemove(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): void;
        getBedDirection(arg0: Internal.LevelReader_, arg1: BlockPos_): Internal.Direction;
        getMenuProvider(arg0: Internal.Level_, arg1: BlockPos_): Internal.MenuProvider;
        getBlockSupportShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        getProperties(): Internal.Collection<Internal.Property<any>>;
        wait(): void;
        isSlimeBlock(): boolean;
        canSustainPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.IPlantable_): boolean;
        spawnAfterBreak(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: boolean): void;
        getBeaconColorMultiplier(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_): number[];
        canStickTo(arg0: Internal.BlockState_): boolean;
        onPlace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): void;
        getBlock(): Internal.Block;
        isFlammable(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        liquid(): boolean;
        getOcclusionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        hasProperty<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>): boolean;
        shouldCheckWeakPower(arg0: Internal.SignalGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        is(arg0: Internal.Block_): boolean;
        isFertile(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        emissiveRendering(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        trySetValue<T extends Internal.Comparable<T>, V extends T>(arg0: Internal.Property_<T>, arg1: V): this;
        mirror(arg0: Internal.Mirror_): this;
        "canBeReplaced(net.minecraft.world.level.material.Fluid)"(arg0: Internal.Fluid_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        isAir(): boolean;
        getDestroySpeed(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        getDirectSignal(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): number;
        /**
         * @deprecated
        */
        blocksMotion(): boolean;
        wait(arg0: number, arg1: number): void;
        isValidSpawn(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.EntityType_<any>): boolean;
        canDropFromExplosion(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Explosion_): boolean;
        isScaffolding(arg0: Internal.LivingEntity_): boolean;
        getAppearance(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.BlockState_, arg4: BlockPos_): this;
        hasLargeCollisionShape(): boolean;
        getDestroyProgress(arg0: Player_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        updateShape(arg0: Internal.Direction_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: BlockPos_): this;
        isSuffocating(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.LevelReader_, arg1: BlockPos_): number;
        onNeighborChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_): void;
        is(arg0: Internal.TagKey_<Internal.Block>, arg1: Internal.Predicate_<Internal.BlockBehaviour$BlockStateBase>): boolean;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Block_, arg3: BlockPos_, arg4: boolean): void;
        "is(net.minecraft.tags.TagKey)"(arg0: Internal.TagKey_<Internal.Block>): boolean;
        updateIndirectNeighbourShapes(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number, arg3: number): void;
        getFaceOcclusionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): Internal.VoxelShape;
        isValidSpawn(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.SpawnPlacements$Type_, arg3: Internal.EntityType_<any>): boolean;
        getShadeBrightness(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        isRedstoneConductor(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getAnalogOutputSignal(arg0: Internal.Level_, arg1: BlockPos_): number;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_, arg3: Internal.BlockHitResult_): Internal.InteractionResult;
        getMapColor(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.MapColor;
        getBlockHolder(): Internal.Holder<Internal.Block>;
        canBeReplaced(): boolean;
        propagatesSkylightDown(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        getWeakChanges(arg0: Internal.LevelReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        getOffset(arg0: Internal.BlockGetter_, arg1: BlockPos_): Vec3d;
        getSoundType(): SoundType;
        "canBeReplaced(net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockPlaceContext_): boolean;
        addRunningEffects(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Entity_): boolean;
        entityCanStandOnFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Entity_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        triggerEvent(arg0: Internal.Level_, arg1: BlockPos_, arg2: number, arg3: number): boolean;
        requiresCorrectToolForDrops(): boolean;
        getFriction(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Entity_): number;
        canBeReplaced(arg0: Internal.BlockPlaceContext_): boolean;
        isSignalSource(): boolean;
        getCloneItemStack(arg0: Internal.HitResult_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): Internal.ItemStack;
        attack(arg0: Internal.Level_, arg1: BlockPos_, arg2: Player_): void;
        equals(arg0: any): boolean;
        getExplosionResistance(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Explosion_): number;
        getFireSpreadSpeed(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): number;
        get values(): Internal.ImmutableMap<Internal.Property<any>, Internal.Comparable<any>>
        get randomlyTicking(): boolean
        get class(): typeof any
        get fluidState(): Internal.FluidState
        get tags(): Internal.Stream<Internal.TagKey<Internal.Block>>
        set requiresTool(arg0: boolean)
        get renderShape(): Internal.RenderShape
        get pistonPushReaction(): Internal.PushReaction
        /**
         * @deprecated
        */
        get solid(): boolean
        get stickyBlock(): boolean
        /**
         * @deprecated
        */
        get lightEmission(): number
        set lightEmission(arg0: number)
        set destroySpeed(arg0: number)
        get properties(): Internal.Collection<Internal.Property<any>>
        get slimeBlock(): boolean
        get block(): Internal.Block
        get air(): boolean
        get blockHolder(): Internal.Holder<Internal.Block>
        get soundType(): SoundType
        get signalSource(): boolean
        static readonly CODEC: Internal.Codec<Internal.BlockState>;
    }
    type BlockState_ = BlockState;
    class WeatheringCopperSlabBlock extends Internal.SlabBlock implements Internal.WeatheringCopper {
        constructor(arg0: Internal.WeatheringCopper$WeatherState_, arg1: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getChanceModifier(): number;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        applyChangeOverTime(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        static getNext(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        onRandomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        static getPrevious(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        static getFirst(arg0: Internal.BlockState_): Internal.BlockState;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        static "getPrevious(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        static "getFirst(net.minecraft.world.level.block.state.BlockState)"(arg0: Internal.BlockState_): Internal.BlockState;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        "getNext(net.minecraft.world.level.block.state.BlockState)"(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getAge(): Internal.WeatheringCopper$WeatherState;
        getNext(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        static "getFirst(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): Internal.Block;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        static "getPrevious(net.minecraft.world.level.block.state.BlockState)"(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        static getPrevious(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        static getFirst(arg0: Internal.Block_): Internal.Block;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        static "getNext(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get chanceModifier(): number
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        get age(): Internal.WeatheringCopper$WeatherState
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type WeatheringCopperSlabBlock_ = WeatheringCopperSlabBlock;
    class Panda extends Internal.Animal {
        constructor(arg0: Internal.EntityType_<Internal.Panda>, arg1: Internal.Level_)
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        isOnFire(): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        isSneezing(): boolean;
        setXxa(arg0: number): void;
        setSneezeCounter(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        setMotionZ(z: number): void;
        getMagicData(): Internal.MagicData;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        isSpectator(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        getHasUsedSingleAttack(): boolean;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isEating(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): Internal.Component;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): Internal.LivingEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        hasPermissions(arg0: number): boolean;
        getUnhappyCounter(): number;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        isWeak(): boolean;
        onlyOpCanSetNbt(): boolean;
        isPlayful(): boolean;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        isLazy(): boolean;
        getRandomX(arg0: number): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: Internal.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        isWorried(): boolean;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        getLeashOffset(): Vec3d;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        isScared(): boolean;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        handler$zcl000$setTicksFrozen(arg0: number, arg1: Internal.CallbackInfo_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getLeashHolder(): Internal.Entity;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        getArrowCount(): number;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setHasUsedSingleAttack(hasUsedSingleAttack: boolean): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        getFirstTick(): boolean;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        canFallInLove(): boolean;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setAttributes(): void;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isDrinkingPotion(): boolean;
        setMainGene(arg0: Internal.Panda$Gene_): void;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        isBrown(): boolean;
        getLastHurtMob(): Internal.LivingEntity;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        sit(arg0: boolean): void;
        getLastDamageSource(): DamageSource;
        getSoundSource(): Internal.SoundSource;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        ageUp(arg0: number): void;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        finalizeSpawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_, arg2: Internal.AgeableMob_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        isCasting(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        handler$zco000$handleEquipmentChanges(arg0: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        "getItemBySlot(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getMotionDirection(): Internal.Direction;
        canBeCollidedWith(): boolean;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        sneeze(arg0: boolean): void;
        getAttributes(): Internal.AttributeMap;
        initiateCastSpell(spell: Internal.AbstractSpell_, spellLevel: number): void;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        spawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_): void;
        setInLoveTime(arg0: number): void;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        castComplete(): void;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        abstract getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getStepHeight(): number;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setGeneFromParents(arg0: Internal.Panda_, arg1: Internal.Panda_): void;
        setSilent(arg0: boolean): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getForgePersistentData(): Internal.CompoundTag;
        getRollAmount(arg0: number): number;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        canMate(arg0: Internal.Animal_): boolean;
        maxUpStep(): number;
        handler$zco000$isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getTags(): Internal.Set<string>;
        getViewVector(arg0: number): Vec3d;
        setSyncedSpellData(syncedSpellData: Internal.SyncedSpellData_): void;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        hasGlowingTag(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        getSneezeCounter(): number;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        ageUp(arg0: number, arg1: boolean): void;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): Internal.AgeableMob;
        setLastHurtByPlayer(arg0: Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        mobInteract(arg0: Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        setRotation(yaw: number, pitch: number): void;
        handler$zzf000$init(entityType: Internal.EntityType_<any>, level: Internal.Level_, ci: Internal.CallbackInfo_): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getJumpControl(): Internal.JumpControl;
        cancelCast(): void;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        handler$zcl000$isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        canBreed(): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        setHiddenGene(arg0: Internal.Panda$Gene_): void;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        tell(message: Internal.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        handler$zco000$getArmorCoverPercentage(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isFullyFrozen(): boolean;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Player_): boolean;
        self(): Internal.PathfinderMob;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        clearRestriction(): void;
        getAge(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        spawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        isFood(arg0: Internal.ItemStack_): boolean;
        setBaby(arg0: boolean): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        setOnBack(arg0: boolean): void;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getBlockX(): number;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        setUnhappyCounter(arg0: number): void;
        handler$zcl000$isInvisibleTo(arg0: Player_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getEyeY(): number;
        skipDropExperience(): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isSitting(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        isAffectedByPotions(): boolean;
        addTag(arg0: string): boolean;
        playerTouch(arg0: Player_): void;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        isWithinRestriction(arg0: BlockPos_): boolean;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        getTeam(): Internal.Team;
        "self()"(): Internal.PathfinderMob;
        getMainGene(): Internal.Panda$Gene;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        isVehicle(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        isRolling(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        setTeleportLocationBehindTarget(distance: number): boolean;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        isRemoved(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        canPerformAction(): boolean;
        getLieOnBackAmount(arg0: number): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        isOnBack(): boolean;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        handler$zbn000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getLookAngle(): Vec3d;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        setInLove(arg0: Player_): void;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        eat(arg0: boolean): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        setAge(arg0: number): void;
        getTarget(): Internal.LivingEntity;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        isInLove(): boolean;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        isInWater(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        m_8024_(): void;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        getSitAmount(arg0: number): number;
        resetLove(): void;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        setBurningDashDirectionData(): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        deserializeNBT(arg0: Internal.Tag_): void;
        revive(): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): Internal.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        handler$zdd000$changeGlowOutline(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getUsername(): string;
        getInLoveTime(): number;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        setDrinkingPotion(drinkingPotion: boolean): void;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        getDisplayName(): Internal.Component;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        startDrinkingPotion(): void;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        getHiddenGene(): Internal.Panda$Gene;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        notifyDangerousProjectile(projectile: Internal.Projectile_): void;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLoveCause(): Internal.ServerPlayer;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getType(): string;
        static checkAnimalSpawnRules(arg0: Internal.EntityType_<Internal.Animal>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        handler$zco000$updateInvisibilityStatus(arg0: Internal.CallbackInfo_): void;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        roll(arg0: boolean): void;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "swing(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        getVariant(): Internal.Panda$Gene;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        get sneezing(): boolean
        set xxa(arg0: number)
        set sneezeCounter(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get magicData(): Internal.MagicData
        get blockY(): number
        get spectator(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set aggressive(arg0: boolean)
        get hasUsedSingleAttack(): boolean
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eating(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): Internal.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        get unhappyCounter(): number
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get weak(): boolean
        get playful(): boolean
        get maxFallDistance(): number
        get ticksFrozen(): number
        get lazy(): boolean
        get voicePitch(): number
        set statusMessage(message: Internal.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get worried(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get scared(): boolean
        get underWater(): boolean
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set hasUsedSingleAttack(hasUsedSingleAttack: boolean)
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get drinkingPotion(): boolean
        set mainGene(arg0: Internal.Panda$Gene_)
        get brown(): boolean
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get blocking(): boolean
        get casting(): boolean
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        set inLoveTime(arg0: number)
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get portalWaitTime(): number
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        set syncedSpellData(syncedSpellData: Internal.SyncedSpellData_)
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        get sneezeCounter(): number
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Player_)
        get "server()"(): Internal.MinecraftServer
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get noAi(): boolean
        set hiddenGene(arg0: Internal.Panda$Gene_)
        get chestArmorItem(): Internal.ItemStack
        get fullyFrozen(): boolean
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get age(): number
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        set onBack(arg0: boolean)
        get steppingCarefully(): boolean
        get blockX(): number
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get fallFlying(): boolean
        get encodeId(): string
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        set unhappyCounter(arg0: number)
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get sitting(): boolean
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        get mainGene(): Internal.Panda$Gene
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get rolling(): boolean
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        set teleportLocationBehindTarget(distance: number)
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get onBack(): boolean
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        get profile(): Internal.GameProfile
        set inLove(arg0: Player_)
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get offHandItem(): Internal.ItemStack
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): Internal.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        set age(arg0: number)
        get target(): Internal.LivingEntity
        get inLove(): boolean
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get speed(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get headArmorItem(): Internal.ItemStack
        get bbWidth(): number
        get "name()"(): Internal.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get username(): string
        get inLoveTime(): number
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        set drinkingPotion(drinkingPotion: boolean)
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): Internal.Component
        get mobType(): Internal.MobType
        get hiddenGene(): Internal.Panda$Gene
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get loveCause(): Internal.ServerPlayer
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get variant(): Internal.Panda$Gene
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
        static readonly TOTAL_ROLL_STEPS: (32) & (number);
        rollCounter: number;
    }
    type Panda_ = Panda;
    interface RecordBuilder <T> {
        build(arg0: Internal.DataResult_<T>): Internal.DataResult<T>;
        abstract add(arg0: T, arg1: Internal.DataResult_<T>): this;
        abstract withErrorsFrom(arg0: Internal.DataResult_<any>): this;
        abstract "add(com.mojang.serialization.DataResult,com.mojang.serialization.DataResult)"(arg0: Internal.DataResult_<T>, arg1: Internal.DataResult_<T>): this;
        abstract "build(java.lang.Object)"(arg0: T): Internal.DataResult<T>;
        add(arg0: string, arg1: Internal.DataResult_<T>): this;
        abstract build(arg0: T): Internal.DataResult<T>;
        abstract "add(java.lang.Object,java.lang.Object)"(arg0: T, arg1: T): this;
        abstract "add(java.lang.Object,com.mojang.serialization.DataResult)"(arg0: T, arg1: Internal.DataResult_<T>): this;
        "build(com.mojang.serialization.DataResult)"(arg0: Internal.DataResult_<T>): Internal.DataResult<T>;
        abstract setLifecycle(arg0: Internal.Lifecycle_): this;
        add<E>(arg0: string, arg1: E, arg2: Internal.Encoder_<E>): this;
        "add(java.lang.String,java.lang.Object)"(arg0: string, arg1: T): this;
        abstract add(arg0: Internal.DataResult_<T>, arg1: Internal.DataResult_<T>): this;
        abstract add(arg0: T, arg1: T): this;
        "add(java.lang.String,com.mojang.serialization.DataResult)"(arg0: string, arg1: Internal.DataResult_<T>): this;
        abstract ops(): Internal.DynamicOps<T>;
        add(arg0: string, arg1: T): this;
        abstract mapError(arg0: Internal.UnaryOperator_<string>): this;
        set lifecycle(arg0: Internal.Lifecycle_)
    }
    type RecordBuilder_<T> = RecordBuilder<T>;
    interface TypeDescriptor$OfField <F extends Internal.TypeDescriptor$OfField<F>> extends Internal.TypeDescriptor {
        abstract isPrimitive(): boolean;
        abstract isArray(): boolean;
        abstract descriptorString(): string;
        abstract arrayType(): F;
        abstract componentType(): F;
        get primitive(): boolean
        get array(): boolean
    }
    type TypeDescriptor$OfField_<F extends Internal.TypeDescriptor$OfField<F>> = TypeDescriptor$OfField<F>;
    class SpectatorPage {
        constructor(arg0: Internal.List_<Internal.SpectatorMenuItem>, arg1: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getSelectedSlot(): number;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getItem(arg0: number): Internal.SpectatorMenuItem;
        get class(): typeof any
        get selectedSlot(): number
        static readonly NO_SELECTION: (-1) & (number);
    }
    type SpectatorPage_ = SpectatorPage;
    abstract class ForgeFlowingFluid extends Internal.FlowingFluid {
        getClass(): typeof any;
        getStateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>;
        tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_): void;
        getFlow(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Vec3d;
        getHeight(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        abstract isSource(arg0: Internal.FluidState_): boolean;
        getOwnHeight(arg0: Internal.FluidState_): number;
        notify(): void;
        getFluidType(): Internal.FluidType;
        wait(arg0: number, arg1: number): void;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Fluid>;
        getShape(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        defaultFluidState(): Internal.FluidState;
        getTickDelay(arg0: Internal.LevelReader_): number;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        arch$registryName(): ResourceLocation;
        abstract getAmount(arg0: Internal.FluidState_): number;
        getSource(arg0: boolean): Internal.FluidState;
        toString(): string;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getFlowing(): Internal.Fluid;
        notifyAll(): void;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        getBucket(): Internal.Item;
        isSame(arg0: Internal.Fluid_): boolean;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        hashCode(): number;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        getFlowing(arg0: number, arg1: boolean): Internal.FluidState;
        wait(arg0: number): void;
        getSource(): Internal.Fluid;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        is(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        get class(): typeof any
        get stateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>
        get fluidType(): Internal.FluidType
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get flowing(): Internal.Fluid
        get bucket(): Internal.Item
        get source(): Internal.Fluid
    }
    type ForgeFlowingFluid_ = ForgeFlowingFluid;
    class PoiRecord {
        constructor(arg0: BlockPos_, arg1: Internal.Holder_<Internal.PoiType>, arg2: Internal.Runnable_)
        getClass(): typeof any;
        hasSpace(): boolean;
        toString(): string;
        notifyAll(): void;
        /**
         * @deprecated
        */
        getFreeTickets(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getPos(): BlockPos;
        hashCode(): number;
        isOccupied(): boolean;
        wait(): void;
        wait(arg0: number): void;
        getPoiType(): Internal.Holder<Internal.PoiType>;
        equals(arg0: any): boolean;
        static codec(arg0: Internal.Runnable_): Internal.Codec<Internal.PoiRecord>;
        get class(): typeof any
        /**
         * @deprecated
        */
        get freeTickets(): number
        get pos(): BlockPos
        get occupied(): boolean
        get poiType(): Internal.Holder<Internal.PoiType>
    }
    type PoiRecord_ = PoiRecord;
    class EntityArgument$Info$Template implements Internal.ArgumentTypeInfo$Template<Internal.EntityArgument> {
        getClass(): typeof any;
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        type(): Internal.ArgumentTypeInfo<Internal.EntityArgument, any>;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type EntityArgument$Info$Template_ = EntityArgument$Info$Template;
    class RegistryBuilder <T> {
        constructor()
        add(arg0: Internal.IForgeRegistry$AddCallback_<T>): this;
        getDefault(): ResourceLocation;
        static of<T>(arg0: string): Internal.RegistryBuilder<T>;
        disableSync(): this;
        onBake(arg0: Internal.IForgeRegistry$BakeCallback_<T>): this;
        "add(net.minecraftforge.registries.IForgeRegistry$CreateCallback)"(arg0: Internal.IForgeRegistry$CreateCallback_<T>): this;
        set(arg0: Internal.IForgeRegistry$MissingFactory_<T>): this;
        notify(): void;
        getAllowOverrides(): boolean;
        "add(net.minecraftforge.registries.IForgeRegistry$AddCallback)"(arg0: Internal.IForgeRegistry$AddCallback_<T>): this;
        addCallback(arg0: any): this;
        onValidate(arg0: Internal.IForgeRegistry$ValidateCallback_<T>): this;
        setDefaultKey(arg0: ResourceLocation_): this;
        getMinId(): number;
        add(arg0: Internal.IForgeRegistry$ClearCallback_<T>): this;
        getSync(): boolean;
        add(arg0: Internal.IForgeRegistry$ValidateCallback_<T>): this;
        getAdd(): Internal.IForgeRegistry$AddCallback<T>;
        setName(arg0: ResourceLocation_): this;
        onClear(arg0: Internal.IForgeRegistry$ClearCallback_<T>): this;
        getMissingFactory(): Internal.IForgeRegistry$MissingFactory<T>;
        onAdd(arg0: Internal.IForgeRegistry$AddCallback_<T>): this;
        getAllowModifications(): boolean;
        hasTags(): this;
        getMaxId(): number;
        wait(): void;
        allowModification(): this;
        add(arg0: Internal.IForgeRegistry$BakeCallback_<T>): this;
        legacyName(arg0: string): this;
        disableOverrides(): this;
        getClass(): typeof any;
        static of<T>(arg0: ResourceLocation_): Internal.RegistryBuilder<T>;
        getClear(): Internal.IForgeRegistry$ClearCallback<T>;
        getBake(): Internal.IForgeRegistry$BakeCallback<T>;
        wait(arg0: number, arg1: number): void;
        "legacyName(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): this;
        onCreate(arg0: Internal.IForgeRegistry$CreateCallback_<T>): this;
        "add(net.minecraftforge.registries.IForgeRegistry$ValidateCallback)"(arg0: Internal.IForgeRegistry$ValidateCallback_<T>): this;
        disableSaving(): this;
        getSaveToDisc(): boolean;
        getCreate(): Internal.IForgeRegistry$CreateCallback<T>;
        getValidate(): Internal.IForgeRegistry$ValidateCallback<T>;
        setIDRange(arg0: number, arg1: number): this;
        static "of(java.lang.String)"<T>(arg0: string): Internal.RegistryBuilder<T>;
        static "of(net.minecraft.resources.ResourceLocation)"<T>(arg0: ResourceLocation_): Internal.RegistryBuilder<T>;
        add(arg0: Internal.IForgeRegistry$CreateCallback_<T>): this;
        "add(net.minecraftforge.registries.IForgeRegistry$ClearCallback)"(arg0: Internal.IForgeRegistry$ClearCallback_<T>): this;
        missing(arg0: Internal.IForgeRegistry$MissingFactory_<T>): this;
        toString(): string;
        notifyAll(): void;
        getLegacyNames(): Internal.Set<ResourceLocation>;
        "legacyName(java.lang.String)"(arg0: string): this;
        hashCode(): number;
        "add(net.minecraftforge.registries.IForgeRegistry$BakeCallback)"(arg0: Internal.IForgeRegistry$BakeCallback_<T>): this;
        wait(arg0: number): void;
        legacyName(arg0: ResourceLocation_): this;
        equals(arg0: any): boolean;
        static of<T>(): Internal.RegistryBuilder<T>;
        setMaxID(arg0: number): this;
        get "default"(): ResourceLocation
        get allowOverrides(): boolean
        set defaultKey(arg0: ResourceLocation_)
        get minId(): number
        get sync(): boolean
        get add(): Internal.IForgeRegistry$AddCallback<T>
        set name(arg0: ResourceLocation_)
        get missingFactory(): Internal.IForgeRegistry$MissingFactory<T>
        get allowModifications(): boolean
        get maxId(): number
        get class(): typeof any
        get clear(): Internal.IForgeRegistry$ClearCallback<T>
        get bake(): Internal.IForgeRegistry$BakeCallback<T>
        get saveToDisc(): boolean
        get create(): Internal.IForgeRegistry$CreateCallback<T>
        get validate(): Internal.IForgeRegistry$ValidateCallback<T>
        get legacyNames(): Internal.Set<ResourceLocation>
        set maxID(arg0: number)
    }
    type RegistryBuilder_<T> = RegistryBuilder<T>;
    class StructureTemplate {
        constructor()
        getAuthor(): string;
        placeInWorld(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructurePlaceSettings_, arg4: Internal.RandomSource_, arg5: number): boolean;
        getClass(): typeof any;
        static transformedVec3d(arg0: Internal.StructurePlaceSettings_, arg1: Vec3d_): Vec3d;
        notify(): void;
        filterBlocks(arg0: BlockPos_, arg1: Internal.StructurePlaceSettings_, arg2: Internal.Block_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        save(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        wait(arg0: number, arg1: number): void;
        getSize(): Vec3i;
        static calculateRelativePosition(arg0: Internal.StructurePlaceSettings_, arg1: BlockPos_): BlockPos;
        getZeroPositionWithTransform(arg0: BlockPos_, arg1: Internal.Mirror_, arg2: Internal.Rotation_): BlockPos;
        calculateConnectedPosition(arg0: Internal.StructurePlaceSettings_, arg1: BlockPos_, arg2: Internal.StructurePlaceSettings_, arg3: BlockPos_): BlockPos;
        load(arg0: Internal.HolderGetter_<Internal.Block>, arg1: Internal.CompoundTag_): void;
        setAuthor(arg0: string): void;
        toString(): string;
        /**
         * @deprecated
        */
        static processBlockInfos(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructurePlaceSettings_, arg4: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        notifyAll(): void;
        static transform(arg0: Vec3d_, arg1: Internal.Mirror_, arg2: Internal.Rotation_, arg3: BlockPos_): Vec3d;
        static processEntityInfos(arg0: Internal.StructureTemplate_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.StructurePlaceSettings_, arg4: Internal.List_<Internal.StructureTemplate$StructureEntityInfo>): Internal.List<Internal.StructureTemplate$StructureEntityInfo>;
        static "transform(net.minecraft.core.BlockPos,net.minecraft.world.level.block.Mirror,net.minecraft.world.level.block.Rotation,net.minecraft.core.BlockPos)"(arg0: BlockPos_, arg1: Internal.Mirror_, arg2: Internal.Rotation_, arg3: BlockPos_): BlockPos;
        getSize(arg0: Internal.Rotation_): Vec3i;
        getBoundingBox(arg0: BlockPos_, arg1: Internal.Rotation_, arg2: BlockPos_, arg3: Internal.Mirror_): Internal.BoundingBox;
        static processBlockInfos(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructurePlaceSettings_, arg4: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, arg5: Internal.StructureTemplate_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        hashCode(): number;
        static updateShapeAtEdge(arg0: Internal.LevelAccessor_, arg1: number, arg2: Internal.DiscreteVoxelShape_, arg3: number, arg4: number, arg5: number): void;
        static transform(arg0: BlockPos_, arg1: Internal.Mirror_, arg2: Internal.Rotation_, arg3: BlockPos_): BlockPos;
        filterBlocks(arg0: BlockPos_, arg1: Internal.StructurePlaceSettings_, arg2: Internal.Block_, arg3: boolean): Internal.ObjectArrayList<Internal.StructureTemplate$StructureBlockInfo>;
        static getZeroPositionWithTransform(arg0: BlockPos_, arg1: Internal.Mirror_, arg2: Internal.Rotation_, arg3: number, arg4: number): BlockPos;
        static "transform(net.minecraft.world.phys.Vec3,net.minecraft.world.level.block.Mirror,net.minecraft.world.level.block.Rotation,net.minecraft.core.BlockPos)"(arg0: Vec3d_, arg1: Internal.Mirror_, arg2: Internal.Rotation_, arg3: BlockPos_): Vec3d;
        getBoundingBox(arg0: Internal.StructurePlaceSettings_, arg1: BlockPos_): Internal.BoundingBox;
        wait(): void;
        wait(arg0: number): void;
        fillFromWorld(arg0: Internal.Level_, arg1: BlockPos_, arg2: Vec3i_, arg3: boolean, arg4: Internal.Block_): void;
        equals(arg0: any): boolean;
        get author(): string
        get class(): typeof any
        get size(): Vec3i
        set author(arg0: string)
        static readonly BLOCK_TAG_POS: ("pos") & (string);
        static readonly ENTITY_TAG_POS: ("pos") & (string);
        static readonly PALETTE_LIST_TAG: ("palettes") & (string);
        static readonly BLOCKS_TAG: ("blocks") & (string);
        static readonly ENTITY_TAG_NBT: ("nbt") & (string);
        static readonly ENTITY_TAG_BLOCKPOS: ("blockPos") & (string);
        static readonly BLOCK_TAG_STATE: ("state") & (string);
        static readonly BLOCK_TAG_NBT: ("nbt") & (string);
        static readonly SIZE_TAG: ("size") & (string);
        static readonly PALETTE_TAG: ("palette") & (string);
        static readonly ENTITIES_TAG: ("entities") & (string);
    }
    type StructureTemplate_ = StructureTemplate;
    interface ClampedItemPropertyFunction extends Internal.ItemPropertyFunction {
        /**
         * @deprecated
        */
        call(arg0: Internal.ItemStack_, arg1: Internal.ClientLevel_, arg2: Internal.LivingEntity_, arg3: number): number;
        abstract unclampedCall(arg0: Internal.ItemStack_, arg1: Internal.ClientLevel_, arg2: Internal.LivingEntity_, arg3: number): number;
        (arg0: Internal.ItemStack, arg1: Internal.ClientLevel, arg2: Internal.LivingEntity, arg3: number): number;
    }
    type ClampedItemPropertyFunction_ = ((arg0: Internal.ItemStack, arg1: Internal.ClientLevel, arg2: Internal.LivingEntity, arg3: number)=> number) | ClampedItemPropertyFunction;
    class BiomeSpecialEffects {
        getWaterColor(): number;
        getClass(): typeof any;
        getGrassColorModifier(): Internal.BiomeSpecialEffects$GrassColorModifier;
        toString(): string;
        getAmbientLoopSoundEvent(): Internal.Optional<Internal.Holder<Internal.SoundEvent>>;
        notifyAll(): void;
        getFoliageColorOverride(): Internal.Optional<number>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getAmbientParticleSettings(): Internal.Optional<Internal.AmbientParticleSettings>;
        getAmbientAdditionsSettings(): Internal.Optional<Internal.AmbientAdditionsSettings>;
        hashCode(): number;
        getBackgroundMusic(): Internal.Optional<Internal.Music>;
        getWaterFogColor(): number;
        wait(): void;
        getGrassColorOverride(): Internal.Optional<number>;
        wait(arg0: number): void;
        getFogColor(): number;
        equals(arg0: any): boolean;
        getSkyColor(): number;
        getAmbientMoodSettings(): Internal.Optional<Internal.AmbientMoodSettings>;
        get waterColor(): number
        get class(): typeof any
        get grassColorModifier(): Internal.BiomeSpecialEffects$GrassColorModifier
        get ambientLoopSoundEvent(): Internal.Optional<Internal.Holder<Internal.SoundEvent>>
        get foliageColorOverride(): Internal.Optional<number>
        get ambientParticleSettings(): Internal.Optional<Internal.AmbientParticleSettings>
        get ambientAdditionsSettings(): Internal.Optional<Internal.AmbientAdditionsSettings>
        get backgroundMusic(): Internal.Optional<Internal.Music>
        get waterFogColor(): number
        get grassColorOverride(): Internal.Optional<number>
        get fogColor(): number
        get skyColor(): number
        get ambientMoodSettings(): Internal.Optional<Internal.AmbientMoodSettings>
        ambientParticleSettings: Internal.Optional<Internal.AmbientParticleSettings>;
        grassColorOverride: Internal.Optional<number>;
        ambientMoodSettings: Internal.Optional<Internal.AmbientMoodSettings>;
        waterColor: number;
        ambientLoopSoundEvent: Internal.Optional<Internal.Holder<Internal.SoundEvent>>;
        fogColor: number;
        ambientAdditionsSettings: Internal.Optional<Internal.AmbientAdditionsSettings>;
        backgroundMusic: Internal.Optional<Internal.Music>;
        grassColorModifier: Internal.BiomeSpecialEffects$GrassColorModifier;
        waterFogColor: number;
        static readonly CODEC: Internal.Codec<Internal.BiomeSpecialEffects>;
        foliageColorOverride: Internal.Optional<number>;
        skyColor: number;
    }
    type BiomeSpecialEffects_ = BiomeSpecialEffects;
    class FilteredText extends Internal.Record {
        constructor(arg0: string, arg1: Internal.FilterMask_)
        static passThrough(arg0: string): Internal.FilteredText;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        static fullyFiltered(arg0: string): Internal.FilteredText;
        filteredOrEmpty(): string;
        notify(): void;
        filtered(): string;
        mask(): Internal.FilterMask;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        raw(): string;
        wait(arg0: number): void;
        isFiltered(): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get filtered(): boolean
        static readonly EMPTY: (Internal.FilteredText) & (Internal.FilteredText);
    }
    type FilteredText_ = FilteredText;
    class RenderTypeGroup extends Internal.Record {
        constructor(arg0: Internal.RenderType_, arg1: Internal.RenderType_)
        constructor(block: Internal.RenderType_, entity: Internal.RenderType_, entityFabulous: Internal.RenderType_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        isEmpty(): boolean;
        notify(): void;
        block(): Internal.RenderType;
        wait(arg0: number, arg1: number): void;
        entityFabulous(): Internal.RenderType;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        entity(): Internal.RenderType;
        get class(): typeof any
        get empty(): boolean
        static EMPTY: (Internal.RenderTypeGroup) & (Internal.RenderTypeGroup);
    }
    type RenderTypeGroup_ = RenderTypeGroup;
    class BlockPos$MutableBlockPos extends BlockPos {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: number, arg1: number, arg2: number)
        mutable(): this;
        getY(): number;
        static getY(arg0: number): number;
        static betweenClosedStream(arg0: BlockPos_, arg1: BlockPos_): Internal.Stream<BlockPos>;
        static "betweenClosedStream(net.minecraft.world.level.levelgen.structure.BoundingBox)"(arg0: Internal.BoundingBox_): Internal.Stream<BlockPos>;
        relative(arg0: Internal.Direction_): Vec3i;
        static offset(arg0: number, arg1: number, arg2: number, arg3: number): number;
        "move(net.minecraft.core.Direction)"(arg0: Internal.Direction_): this;
        below(arg0: number): Vec3i;
        setWithOffset(arg0: Vec3i_, arg1: Internal.Direction_): this;
        set(arg0: number, arg1: number, arg2: number): this;
        move(arg0: Internal.Direction_, arg1: number): this;
        west(): Vec3i;
        static betweenClosedStream(arg0: Internal.BoundingBox_): Internal.Stream<BlockPos>;
        setWithOffset(arg0: Vec3i_, arg1: Vec3i_): this;
        "relative(net.minecraft.core.Direction$Axis,int)"(arg0: Internal.Direction$Axis_, arg1: number): BlockPos;
        distSqr(arg0: Vec3i_): number;
        "relative(net.minecraft.core.Direction,int)"(arg0: Internal.Direction_, arg1: number): BlockPos;
        subtract(arg0: Vec3i_): Vec3i;
        getCenter(): Vec3d;
        static containing(arg0: Internal.Position_): BlockPos;
        setY(arg0: number): Vec3i;
        "compareTo(java.lang.Object)"(arg0: any): number;
        getClass(): typeof any;
        getX(): number;
        static getX(arg0: number): number;
        set(arg0: number): this;
        atY(arg0: number): BlockPos;
        west(arg0: number): Vec3i;
        rotate(arg0: Internal.Rotation_): BlockPos;
        relative(arg0: Internal.Direction_, arg1: number): BlockPos;
        "set(net.minecraft.core.Vec3i)"(arg0: Vec3i_): this;
        offset(arg0: number, arg1: number, arg2: number): Vec3i;
        static withinManhattanStream(arg0: BlockPos_, arg1: number, arg2: number, arg3: number): Internal.Stream<BlockPos>;
        immutable(): BlockPos;
        toString(): string;
        north(arg0: number): Vec3i;
        move(arg0: Internal.Direction_): this;
        static asLong(arg0: number, arg1: number, arg2: number): number;
        notifyAll(): void;
        distManhattan(arg0: Vec3i_): number;
        set(arg0: number, arg1: number, arg2: number): this;
        static of(arg0: number): BlockPos;
        get(arg0: Internal.Direction$Axis_): number;
        offset(arg0: Vec3i_): Vec3i;
        south(): Vec3i;
        wait(arg0: number): void;
        compareTo(arg0: Vec3i_): number;
        setX(arg0: number): Vec3i;
        closerToCenterThan(arg0: Internal.Position_, arg1: number): boolean;
        setZ(arg0: number): this;
        static offsetCodec(arg0: number): Internal.Codec<Vec3i>;
        static betweenClosed(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.Iterable<BlockPos>;
        toShortString(): string;
        notify(): void;
        compareTo(arg0: any): number;
        east(arg0: number): Vec3i;
        multiply(arg0: number): BlockPos;
        asLong(): number;
        static spiralAround(arg0: BlockPos_, arg1: number, arg2: Internal.Direction_, arg3: Internal.Direction_): Internal.Iterable<Internal.BlockPos$MutableBlockPos>;
        "setWithOffset(net.minecraft.core.Vec3i,net.minecraft.core.Direction)"(arg0: Vec3i_, arg1: Internal.Direction_): this;
        closerThan(arg0: Vec3i_, arg1: number): boolean;
        above(): Vec3i;
        "compareTo(net.minecraft.core.Vec3i)"(arg0: Vec3i_): number;
        east(): Vec3i;
        set(arg0: Vec3i_): this;
        static randomInCube(arg0: Internal.RandomSource_, arg1: number, arg2: BlockPos_, arg3: number): Internal.Iterable<BlockPos>;
        static breadthFirstTraversal(arg0: BlockPos_, arg1: number, arg2: number, arg3: Internal.BiConsumer_<BlockPos, Internal.Consumer<BlockPos>>, arg4: Internal.Predicate_<BlockPos>): number;
        static betweenClosed(arg0: BlockPos_, arg1: BlockPos_): Internal.Iterable<BlockPos>;
        static offset(arg0: number, arg1: Internal.Direction_): number;
        wait(): void;
        "set(double,double,double)"(arg0: number, arg1: number, arg2: number): this;
        distToCenterSqr(arg0: number, arg1: number, arg2: number): number;
        north(): Vec3i;
        distToCenterSqr(arg0: Internal.Position_): number;
        south(arg0: number): Vec3i;
        move(arg0: Vec3i_): this;
        static getZ(arg0: number): number;
        static findClosestMatch(arg0: BlockPos_, arg1: number, arg2: number, arg3: Internal.Predicate_<BlockPos>): Internal.Optional<BlockPos>;
        above(arg0: number): Vec3i;
        set(arg0: Internal.AxisCycle_, arg1: number, arg2: number, arg3: number): this;
        clamp(arg0: Internal.Direction$Axis_, arg1: number, arg2: number): this;
        wait(arg0: number, arg1: number): void;
        distToLowCornerSqr(arg0: number, arg1: number, arg2: number): number;
        "setWithOffset(net.minecraft.core.Vec3i,net.minecraft.core.Vec3i)"(arg0: Vec3i_, arg1: Vec3i_): this;
        static "betweenClosedStream(net.minecraft.world.phys.AABB)"(arg0: Internal.AABB_): Internal.Stream<BlockPos>;
        "set(long)"(arg0: number): this;
        "set(int,int,int)"(arg0: number, arg1: number, arg2: number): this;
        static betweenClosedStream(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.Stream<BlockPos>;
        getZ(): number;
        move(arg0: number, arg1: number, arg2: number): this;
        static randomBetweenClosed(arg0: Internal.RandomSource_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): Internal.Iterable<BlockPos>;
        setWithOffset(arg0: Vec3i_, arg1: number, arg2: number, arg3: number): this;
        below(): Vec3i;
        static getFlatIndex(arg0: number): number;
        cross(arg0: Vec3i_): Vec3i;
        static withinManhattan(arg0: BlockPos_, arg1: number, arg2: number, arg3: number): Internal.Iterable<BlockPos>;
        /**
         * @deprecated
        */
        static squareOutSouthEast(arg0: BlockPos_): Internal.Stream<BlockPos>;
        static containing(arg0: number, arg1: number, arg2: number): BlockPos;
        static betweenClosedStream(arg0: Internal.AABB_): Internal.Stream<BlockPos>;
        hashCode(): number;
        "move(net.minecraft.core.Vec3i)"(arg0: Vec3i_): this;
        relative(arg0: Internal.Direction$Axis_, arg1: number): BlockPos;
        equals(arg0: any): boolean;
        get y(): number
        get center(): Vec3d
        set y(arg0: number)
        get class(): typeof any
        get x(): number
        set "(net.minecraft.core.Vec3i)"(arg0: Vec3i_)
        set x(arg0: number)
        set z(arg0: number)
        set "(long)"(arg0: number)
        get z(): number
    }
    type BlockPos$MutableBlockPos_ = BlockPos$MutableBlockPos;
    class DensityFunctions$Marker extends Internal.Record implements Internal.DensityFunctions$MarkerOrMarked {
        getClass(): typeof any;
        halfNegative(): Internal.DensityFunction;
        abs(): Internal.DensityFunction;
        toString(): string;
        maxValue(): number;
        notifyAll(): void;
        codec(): Internal.KeyDispatchDataCodec<Internal.DensityFunction>;
        compute(arg0: Internal.DensityFunction$FunctionContext_): number;
        squeeze(): Internal.DensityFunction;
        square(): Internal.DensityFunction;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        mapAll(arg0: Internal.DensityFunction$Visitor_): Internal.DensityFunction;
        clamp(arg0: number, arg1: number): Internal.DensityFunction;
        hashCode(): number;
        wrapped(): Internal.DensityFunction;
        quarterNegative(): Internal.DensityFunction;
        wait(): void;
        type(): Internal.DensityFunctions$Marker$Type;
        cube(): Internal.DensityFunction;
        wait(arg0: number): void;
        fillArray(arg0: number[], arg1: Internal.DensityFunction$ContextProvider_): void;
        minValue(): number;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type DensityFunctions$Marker_ = DensityFunctions$Marker;
}
